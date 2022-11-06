import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handlesubmit = async (e) => {
    if (username === "foo" && password === "bar") {
      navigate("/home");
      localStorage.setItem("logged-in", "sucess");
    } else {
      alert("invalid credentials : username:foo, password: bar");
    }
  };
  return (
    <div className="lgn">
      <div className="rgt-lgn">
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/45/95/40/1000_F_245954012_IVjogVHM4vjKBgQPhzH2Zsy8XJjve1lm.jpg"
          alt=""
        />
      </div>
      <form className="lgnbox" onSubmit={handlesubmit}>
        <h1 className="lgn-ttl">Welcome to Page!</h1>
        <div className="lgn-inp-conti">
          <div>
            <label className="inp-comp" htmlFor="username">
              <input
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="lgn-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-comp">
              <input
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="lgn-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="lgn-btn" type="submit">
          <h3>Login</h3>
        </button>
      </form>
    </div>
  );
}
