import { useState } from "react";
export default function App4() {
  const [user, setUser] = useState({});
  const [msg, setMsg] = useState();
  const handleSubmit = () => {
    if(user.email==="john@gmail.com" && user.password==="1234"){
        setMsg("Welcome John")
    }
    else {
        setMsg("Access Denied")
    }
  }
  return (
    <div>
      <h3>This is App4</h3>
      {msg}
      <p>
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}