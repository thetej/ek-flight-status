import React from "react";
import "./input.scss";

export default function InputField(props) {
  const { id, labelText } = props;
  return (
    <div className="input-wrap">
      <input id={id} className="input-field" />
      <label htmlFor={id} className="input-label">
        {labelText}
      </label>
    </div>
  );
}
