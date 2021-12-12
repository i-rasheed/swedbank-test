import React, { useState } from "react";
import "./ApplicationData.css";
import { useNavigate } from "react-router-dom";
import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";
import FormSteps from "../../components/FormSteps/FormSteps";

let initialValues = {
  loanAmount: "",
  reason: "Hospital",
};

export default function ApplicationData() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState();
  let navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("personalData"));

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const previousHandler = () => {
    navigate("/personal_data");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { loanAmount, reason } = values;

    if (!loanAmount || !reason) {
      return setError("All fields are mandatory!");
    }

    let applicationData = {
      loanAmount,
      reason,
    };

    initialValues = {
      loanAmount,
      reason,
    };

    if (loanAmount > (20 / 100) * data.salary) {
      return setError(
        "Not eligible, loan amount greater than 20 percent salary!"
      );
    }

    localStorage.setItem("applicationData", JSON.stringify(applicationData));
    navigate("/bank_account");
  };

  return (
    <div className="center">
      <FormSteps step1></FormSteps>
      <ErrorNotice message={error} />
      <form onSubmit={submitHandler}>
        <label htmlFor="loanAmount">Loan Amount: * £ </label>
        <input
          type="text"
          name="loanAmount"
          id="loanAmount"
          value={values.loanAmount}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <label htmlFor="reason">Loan reason : * </label>
        <select
          value={values.reason}
          name="reason"
          onChange={handleInputChange}
        >
          <option value="Hospital">Hospital</option>
          <option value="School fees">School fees</option>
          <option value="Rent">Rent</option>
          <option value="Travel">Travel</option>
        </select>{" "}
        <br />
        <br />
        <button onClick={previousHandler}>Previous</button>
        <button className="next-btn">Next</button>
      </form>
    </div>
  );
}
