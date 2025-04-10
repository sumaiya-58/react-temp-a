import React from "react";
import { useRef } from "react";
export default function App16() {
  const nameRef = useRef(0);
  const ageRef = useRef(0);
  const handleSubmit = () => {
    let name = nameRef.current.value
    let age = ageRef.current.value
    if (age < 18) {
      console.log("No allowed");
    } else {
      console.log("Allowed");
    }
  };
  return (
    <div>
      <h3>This is App16</h3>
      <p>Uncontrolled Component</p>
      <p>
        <input type="text" ref={nameRef}></input>
      </p>
      <p>
        <input type="number" ref={ageRef}></input>
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr></hr>
    </div>
  );
}