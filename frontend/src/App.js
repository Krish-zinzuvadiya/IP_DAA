import React, { useState } from "react";
import ActivityForm from "./ActivityForm";
import StepVisualizer from "./StepVisualizer";

function App() {

  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>Activity Selection Problem</h1>

      <ActivityForm setResult={setResult} />

      {result && <StepVisualizer result={result} />}
    </div>
  );
}

export default App;
