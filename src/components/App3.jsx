import { useState } from "react";

export default function App1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setMsg("Please fill in all fields.");
      setMsgColor("orange");
      return;
    }

    if (email === "john@email.com" && password === "1234") {
      setMsg("Welcome John!");
      setMsgColor("green");
      setEmail("");
      setPassword("");
    } else {
      setMsg("Access Denied!");
      setMsgColor("red");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>This is App1</h2>
      {msg && <p style={{ color: msgColor }}>{msg}</p>}
      
      <p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", width: "200px" }}
        />
      </p>
      
      <p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "200px" }}
        />
      </p>
      
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
}
