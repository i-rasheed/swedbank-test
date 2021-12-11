import React, { useState } from "react";
import "./Summary.css";
import { useNavigate } from "react-router-dom";
import MsgNotice from "../../components/MsgNotice/MsgNotice";
import FormSteps from "../../components/FormSteps/FormSteps";

export default function Summary() {
  const [msg, setMsg] = useState();
  const personalData = JSON.parse(localStorage.getItem("personalData"));
  const applicationData = JSON.parse(localStorage.getItem("applicationData"));
  const bankAccount = JSON.parse(localStorage.getItem("bankAccount"));
  const OtherInfo = JSON.parse(localStorage.getItem("otherInfo"));

  const navigate = useNavigate();

  const previousHandler = () => {
    navigate("/other_info");
  };

  const loanSubmitHandler = () => {
    setMsg("Successfully submitted! ");
  };

  return (
    <div className="summary-wrapper">
      <FormSteps step1 step2 step3 step4></FormSteps>
      <div className="margin-top">
        {msg && <MsgNotice message={msg} />}
        <div className="margin-btm-10">
          <h3>Personal Data</h3>
          <p>First name: {personalData.firstName}</p>
          <p>Last name: {personalData.lastName}</p>
          <p> Salary: {personalData.salary}</p>
          <p>repayment: {personalData.repayment}</p>
        </div>
        <div className="margin-btm-10">
          <h3>Application Data</h3>
          <p>Loan amount: {applicationData.loanAmount}</p>
          <p>Reason: {applicationData.reason}</p>
        </div>
      </div>

      <div className="right-summary">
        <div className="acc_details  margin-btm-10">
          <h3>Account Details</h3>
          <p>Bank name: {bankAccount.bankName}</p>
          <p>Account name: {bankAccount.account_name}</p>
          <p>Account number: {bankAccount.account_no}</p>
        </div>
        <div className="margin-btm-10">
          <h3>Other Info</h3>
          <p>Kin name: {OtherInfo.kin_name}</p>
          <p>Kin contact: {OtherInfo.kin_number}</p>
        </div>
        <button onClick={previousHandler}>Previous</button>
        <button className="next-btn" onClick={loanSubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
