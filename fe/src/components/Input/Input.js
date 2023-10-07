import React from "react";
import cx from "classnames";

import "./styles/Input.scss";

const Input = ({ className = "", ...props }) => {
  const classes = cx("Input", className);

  return <input className={classes} {...props} />;
};

export default Input;
