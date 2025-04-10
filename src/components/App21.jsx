import React, { useEffect, useState } from "react";

export default function App21() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("App21 Mounted",count);
    return () => {
      console.log("App21 Unmounted");
    };
  }, [count]);
  const handleUpdate = () => {
    setCount(count + 1);
    console.log("App21 Updated/reloaded")
  };
  return (
    <div>
      <h3>This is App21</h3>

      <p>
        <button onClick={handleUpdate}>Update</button>
      </p>

      {count}
    </div>
  );
}