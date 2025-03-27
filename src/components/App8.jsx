import React, { useState, useEffect } from "react";

export default function App8() {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState("");
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const addNumber = () => {
    if (number.trim() !== "") {
      setNumbers([...numbers, parseInt(number)]);
      setNumber("");
    }
  };

  useEffect(() => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    setTotal(sum);
    console.log("Numbers updated:", numbers, "Total:", sum);
  }, [numbers]);

  return (
    <div>
      <h3>This is App8</h3>
      <p>
        <input type="number" value={number} onChange={handleInputChange} />
        <button onClick={addNumber}>Add</button>
      </p>
      <h4>Numbers List:</h4>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h4>Total Sum: {total}</h4>
    </div>
  );
}