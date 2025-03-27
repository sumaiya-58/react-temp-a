import React from "react";
import { useState, useEffect } from "react";
export default function App7() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);
  const handleSubmit = () => {
    setResult(Number(a)+Number(b))
  }
  return (
    <div>
      <h3>This is App7</h3>
      <p>
        <input type="number" onChange={(e)=>setA(e.target.value)}></input>
      </p>
      <p>
        <input type="number" onChange={(e)=>setB(e.target.value)}></input>
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <p>
        {result}
      </p>
    </div>
  );
}