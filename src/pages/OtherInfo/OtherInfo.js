import React, { useState } from "react";
import "./OtherInfo.css";
import { useNavigate } from "react-router-dom";
import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";

const initialValues = {
  kin_name: "",
  kin_number: "",
};

export default function OtherInfo() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState();
  let navigate = useNavigate();

  const previousHandler = () => {
    navigate("/bank_account");
  };

  function handleInputChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const { kin_name, kin_number } = values;

    if (!kin_name || !kin_number) {
      return setError("All fields are mandatory!");
    }

    let otherInfo = {
      kin_name,
      kin_number,
    };

    localStorage.setItem("otherInfo", JSON.stringify(otherInfo));
    navigate("/summary");
  };

  return (
    <div className="center">
      {error && <ErrorNotice message={error} />}
      <form onSubmit={submitHandler}>
        <label htmlFor="kin_name">Next of Kin Name: * </label>
        <input
          type="text"
          name="kin_name"
          id="kin_name"
          value={values.kin_name}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <label htmlFor="kin_number">Phone number: * </label>
        <input
          type="text"
          name="kin_number"
          id="kin_number"
          value={values.kin_Number}
          onChange={handleInputChange}
        />{" "}
        <br />
        <br />
        <button onClick={previousHandler}>Previous</button>
        <button className="next-btn">Next</button>
      </form>
    </div>
  );
}
