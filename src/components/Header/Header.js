import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const brandClickHandler = () => {
    navigate("/");
    localStorage.clearItem();
  };
  return (
    <div>
      <h2 onClick={brandClickHandler} className="brand orange">
        {" "}
        Swedbank
      </h2>

      <h1 className="main_heading orange">Small loan application</h1>
    </div>
  );
}
