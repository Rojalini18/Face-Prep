import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handlelogout = () => {
    localStorage.setItem("logged-in", "failure");
    navigate("/");
  };
  return (
    <div className="nav">
      <img
        src="https://www.faceprep.in/statics/media/logo_web.47d10a50.svg"
        alt=""
      />
      {localStorage.getItem("logged-in") === "sucess" && (
        <button onClick={handlelogout} className="logout-btn">
          <h3>Logout</h3>
        </button>
      )}
    </div>
  );
};

export default Navbar;
