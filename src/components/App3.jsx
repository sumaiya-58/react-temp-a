import { useState } from "react";

export default function App1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (email === "john@email.com" && password === "1234") {
      setMsg("Welcome John");
    } else {
      setMsg("Access Denied");
    }
  };

  return (
    <div>
      <h2>This is App1</h2>
      <p>{msg}</p>
      <p>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
