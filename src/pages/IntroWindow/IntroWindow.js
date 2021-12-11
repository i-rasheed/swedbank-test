import React from "react";
import { useNavigate } from "react-router-dom";

import "./IntroWindow.css";

export default function IntroWindow(props) {
  const navigate = useNavigate();

  const applicationHandler = () => {
    navigate("/personal_data");
  };
  return (
    <div className="intro-wrapper">
      <p>
        Submission of an application is not considered to be your obligation to
        sign a credit agreement. After you receive a proposal from the bank, we
        recommend considering it before taking a decision to conclude a credit
        agreement.
      </p>

      <button className="intro-btn" onClick={applicationHandler}>
        Complete an application
      </button>
    </div>
  );
}
