import { useState } from "react";

export default function App2() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>This is App2</h1>
      <h2>Count: {count}</h2>
      <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
        -
      </button>
      <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
        +
      </button>
    </div>
  );
}
