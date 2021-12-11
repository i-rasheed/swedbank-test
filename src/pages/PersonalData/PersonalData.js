import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";
import "./PersonalData.css";
import FormSteps from "../../components/FormSteps/FormSteps";

const initialValues = {
  firstName: "",
  lastName: "",
  salary: "",
  repayment: "3",
};

const PersonalData = () => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState();
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { firstName, lastName, salary, repayment } = values;
    if (!firstName || !lastName || !salary || !repayment) {
      return setError("All fields are mandatory!");
    }

    let personalData = {
      firstName,
      lastName,
      salary,
      repayment,
    };

    localStorage.setItem("personalData", JSON.stringify(personalData));
    navigate("/application_data");
  };

  return (
    <div className="center">
      <FormSteps></FormSteps>
      {error && <ErrorNotice message={error} />}
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName"> First Name: * </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <label htmlFor="lastName"> Last Name: * </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <label htmlFor="repayment">Prefered repayment date : *</label>
        <select
          value={values.repayment}
          name="repayment"
          onChange={handleInputChange}
        >
          <option value="3">3</option>
          <option selected value="7">
            7
          </option>
          <option value="12">12</option>
          <option value="17">17</option>
        </select>{" "}
        <br /> <br />
        <label htmlFor="salary">Your monthly Salary after tax: * £ </label>
        <input
          type="text"
          name="salary"
          id="salary"
          value={values.salary}
          onChange={handleInputChange}
        />
        <br /> <br />
        <button className="next-btn">Next</button>
      </form>
    </div>
  );
};

export default PersonalData;
