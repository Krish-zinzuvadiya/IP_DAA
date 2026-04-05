from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"status": "Backend is running!"}), 200


@app.route("/run", methods=["POST"])
def run_algorithm():

    data = request.json

    if not data or "activities" not in data:
        return jsonify({
            "error": "No activities provided"
        }), 400

    activities = data["activities"]

    if len(activities) == 0:
        return jsonify({
            "error": "Activity list is empty"
        }), 400


    for act, start, finish in activities:

        # Negative value check
        if start < 0 or finish < 0:
            return jsonify({
                "error": f"Invalid activity A{act}: Time values cannot be negative"
            }), 400

        # Start must be less than Finish
        if start >= finish:
            return jsonify({
                "error": f"Invalid activity A{act}: Start time must be less than Finish time"
            }), 400


    # ===== GREEDY ALGORITHM START =====
    activities_sorted = sorted(activities, key=lambda x: x[2])
    steps = []
    selected = []
    rejected = []
    last_finish = -1

    for act, start, finish in activities_sorted:
        compatible = start >= last_finish
        step = {
            "activity": (act, start, finish),
            "compatible": compatible,
            "condition": f"{start} ≥ {last_finish}",
            "selected": selected.copy(),
            "rejected": rejected.copy()
        }

        if compatible:
            selected.append((act, start, finish))
            last_finish = finish
        else:
            rejected.append((act, start, finish))

        step["selected_after"] = selected.copy()
        step["rejected_after"] = rejected.copy()

        steps.append(step)

    return jsonify({
        "sorted": activities_sorted,
        "steps": steps,
        "final_selected": selected,
        "final_rejected": rejected
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
