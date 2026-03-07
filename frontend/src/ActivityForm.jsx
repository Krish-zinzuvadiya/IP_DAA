import React, { useState } from "react";
import axios from "axios";

export default function ActivityForm({ setResult }) {

  const [activities, setActivities] = useState([]);
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [error, setError] = useState(""); 

  // ===== ADD MANUAL ACTIVITY (VALIDATION HERE) =====
  const addActivity = () => {

    setError(""); // clear error

    // Empty check
    if (start === "" || finish === "") {
      setError("Please enter both Start and Finish time");
      return;
    }

    const s = Number(start);
    const f = Number(finish);

    if (s < 0 || f < 0) {
      setError("Start and Finish time cannot be negative");
      return;
    }

    if (s >= f) {
      setError("Start time must be less than Finish time");
      return;
    }

    // Add only if validation passes
    setActivities([
      ...activities,
      [activities.length + 1, s, f]
    ]);

    setStart("");
    setFinish("");
  };


  // ===== EXAMPLE DATA BUTTON =====
  const loadExample = () => {
    setError("");

    const exampleData = [
      [1, 1, 3],
      [2, 2, 5],
      [3, 3, 4],
      [4, 4, 7],
      [5, 7, 10],
      [6, 8, 9],
      [7, 9, 11],
      [8, 9, 13],
      [9, 11, 12],
      [10, 12, 14]
    ];

    setActivities(exampleData);
  };


  // ===== RUN ALGORITHM =====
  const runAlgorithm = async () => {

    setError("");

    if (activities.length === 0) {
      setError("Please add at least one activity before running the algorithm");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/run", {
        activities
      });

      setResult(res.data);

    } catch (err) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Server error occurred. Please try again.");
      }
    }
  };


  return (
    <div className="visual-card">

      <h2>Add Activity</h2>

      <div className="input-container">

        <input
          className="input-field"
          placeholder="Start Time"
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />

        <input
          className="input-field"
          placeholder="Finish Time"
          type="number"
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
        />

        <button onClick={addActivity}>
          Add
        </button>

        <button onClick={loadExample}>
          Example
        </button>

        <button onClick={runAlgorithm}>
          Run Algorithm
        </button>

      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <p style={{
          color: "red",
          marginTop: "15px",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          ⚠ {error}
        </p>
      )}

      {/* ===== Activity Preview ===== */}
      {activities.length > 0 && (
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <h3>Activities List</h3>

          {activities.map((a) => (
            <p key={a[0]}>
              A{a[0]} : {a[1]} - {a[2]}
            </p>
          ))}
        </div>
      )}

    </div>
  );
}
