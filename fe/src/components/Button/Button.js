import React from "react";
import cx from "classnames";

import "./Button.scss";

const Button = ({ children, className, ...props }) => {
  const classes = cx("Button", className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
