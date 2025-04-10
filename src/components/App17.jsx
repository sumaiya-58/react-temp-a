import React from "react";
import { useState } from "react";
import Child from "./Child";
export default function App17() {
  const [count, setCount] = useState(0);
  const hrs = new Date().getMinutes();
  return (
    <div>
      <h3>This is App17</h3>
      <Child hrs={hrs} />
      <hr></hr>
      <p><button onClick={()=>setCount(count+1)}>Click</button></p>
      {count}
    </div>
  );
}