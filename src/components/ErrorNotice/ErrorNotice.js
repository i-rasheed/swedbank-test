import React from "react";
import "./ErrorNotice.css";

export default function ErrorNotice(props) {
  return (
    <div className="error">
      <div className="error-msg"> {props.message}</div>
    </div>
  );
}
