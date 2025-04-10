import React from "react";
import { useMemo, useState } from "react";
export default function App18() {
  const [length, setLength] = useState(1000);
  const [count, setCount] = useState(0);
  //   const [result, setResult] = useState(0);

  //   const f1 = useMemo(() => {
  //     let i;
  //     for (i = 0; i < length ** 2; i++) {}
  //     console.log("f1 function called");
  //     return i;
  //   }, [length]);

  const f1 = () => {
    let i;
    for (i = 0; i < length ** 2; i++) {}
    console.log("f1 function called");
    return i;
  };

  const result = useMemo(() => f1(), [length]);
  //   const result = f1()

  return (
    <div>
      <h3>This is App18</h3>
      <p>
        <button onClick={() => setLength(length + 1)}>Length:({length})</button>
        Calculated Value:{result}
      </p>
      <p>
        <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      </p>
    </div>
  );
}