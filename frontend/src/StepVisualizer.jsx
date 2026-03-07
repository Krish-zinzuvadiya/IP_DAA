import React, { useState } from "react";
import "./style.css";
import Timeline from "./Timeline";

export default function StepVisualizer({ result }) {

  const [stepIndex, setStepIndex] = useState(0);

  const step = result.steps[stepIndex];
  const isLastStep = stepIndex === result.steps.length - 1;

  return (
    <div className="visual-card">

      {/* ===== STEP HEADER ===== */}
      <h2>STEP {stepIndex + 1}</h2>

      <h3>
        Checking Activity A{step.activity[0]} ({step.activity[1]} - {step.activity[2]})
      </h3>

      <p className="condition">
        Condition: {step.condition}
      </p>

      <p className={step.compatible ? "ok" : "fail"}>
        {step.compatible ? "SELECTED" : "REJECTED"}
      </p>


      <h3>Selected Timeline</h3>

      <Timeline selected={step.selected_after} />

      <h3>Discarded Activities</h3>

      <div className="discard">

        {step.rejected_after.length === 0 ? (
          <p style={{ color: "gray" }}>None</p>
        ) : (
          step.rejected_after.map((a, i) => (
            <div key={i} className="discardBox">
              A{a[0]} ({a[1]} - {a[2]})
            </div>
          ))
        )}

      </div>

      {/* ===== FINAL RESULT ===== */}
      {isLastStep && (
        <div className="final-section">

          <h2>Final Selected Activities</h2>

          <Timeline selected={result.final_selected} final />

          <h3 className="final-count">
            Maximum Selected Activities = {result.final_selected.length}
          </h3>

        </div>
      )}

      {/* ===== NAVIGATION ===== */}
      <div style={{ marginTop: "40px" }}>

        <button
          disabled={stepIndex === 0}
          onClick={() => setStepIndex(stepIndex - 1)}
        >
          Prev
        </button>

        <button
          disabled={isLastStep}
          onClick={() => setStepIndex(stepIndex + 1)}
        >
          Next
        </button>

      </div>

    </div>
  );
}
