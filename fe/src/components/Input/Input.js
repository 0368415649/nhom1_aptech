import React, { cloneElement, isValidElement, useMemo, useState } from "react";
import cx from "classnames";

import "./styles/Input.scss";
import { EyeIcon, EyeSlashIcon } from "../Svg";

const Input = ({
  className = "",
  button,
  type = "text",
  isPasswordInput,
  ...props
}) => {
  const classes = cx("Input", className);
  const [inputType, setInputType] = useState(
    isPasswordInput ? "password" : type
  );

  const toggleInputType = () => {
    if (!isPasswordInput) return type;
    setInputType((prev) => (prev === "text" ? "password" : "text"));
  };

  return (
    <div className={classes}>
      <input type={inputType} {...props} />
      {button &&
        isValidElement(button) &&
        cloneElement(button, {
          className: "input-button",
        })}
      {isPasswordInput && (
        <>
          {inputType === "text" ? (
            <EyeSlashIcon className="hide-password" onClick={toggleInputType} />
          ) : (
            <EyeIcon className="show-password" onClick={toggleInputType} />
          )}
        </>
      )}
    </div>
  );
};

export default Input;
