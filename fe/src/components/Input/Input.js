import React, { useState } from "react";
import cx from "classnames";

import "./styles/Input.scss";

const Input = ({
  label,
  error,
  placeholder = " ",
  triggered,
  className,
  ...props
}) => {
  const [isDirty, setIsDirty] = useState(false);

  const classes = cx("Input", className);

  return (
    <div className={classes}>
      <div className="input-wrapper">
        <input
          autoComplete="off"
          placeholder={placeholder}
          onBlur={() => setIsDirty(true)}
          onChange={() => setIsDirty(false)}
          {...props}
        />
        {label && <div className="label">{label}</div>}
      </div>
      {(isDirty || triggered) && error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;
