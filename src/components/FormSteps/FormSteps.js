import React from "react";
import "./FormSteps.css";

export default function FormSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? "active" : " "}>Personal Data</div>
      <div className={props.step2 ? "active" : " "}> Application Data</div>
      <div className={props.step3 ? "active" : " "}>Bank Account</div>
      <div className={props.step4 ? "active" : " "}>Next Of Kin</div>
    </div>
  );
}
