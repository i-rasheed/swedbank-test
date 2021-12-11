import React, { useState } from "react";
import "./BankAccount.css";
import { useNavigate } from "react-router-dom";
import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";

const initialValues = {
  bankName: "",
  account_name: "",
  account_no: "",
};

export default function BankAccount() {
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

  const previousHandler = () => {
    navigate("/application_data");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { bankName, account_name, account_no } = values;

    if (!bankName || !account_no || !account_name) {
      return setError("All fields are mandatory!");
    }

    let bankAccount = {
      bankName,
      account_name,
      account_no,
    };

    localStorage.setItem("bankAccount", JSON.stringify(bankAccount));
    navigate("/other_info");
  };

  return (
    <div className="center">
      {error && <ErrorNotice message={error} />}
      <form onSubmit={submitHandler}>
        <label htmlFor="bankName">Bank Name: * </label>
        <input
          type="text"
          name="bankName"
          id="bankName"
          value={values.bankName}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <label htmlFor="account_name">Account Name: * </label>
        <input
          type="text"
          name="account_name"
          id="account_name"
          value={values.account_name}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <label htmlFor="account_no">Account Number: * </label>
        <input
          type="text"
          name="account_no"
          id="account_no"
          value={values.account_no}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button onClick={previousHandler}>Previous</button>
        <button className="next-btn">Next</button>
      </form>
    </div>
  );
}
