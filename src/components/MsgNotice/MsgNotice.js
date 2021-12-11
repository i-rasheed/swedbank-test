import React from "react";
import "./MsgNotice.css";

export default function MsgNotice(props) {
  return <div className="msg-notice">{props.message}</div>;
}
