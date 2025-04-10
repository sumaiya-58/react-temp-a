// App22.jsx
import React from "react";

function App22({ name = "Guest",age="23" ,color = "blue" }) {
    return (
      <div style={{ color }}>
        <h2>Hello, {name} {age}!</h2>
      </div>
    );
  }
  
  export default App22;
