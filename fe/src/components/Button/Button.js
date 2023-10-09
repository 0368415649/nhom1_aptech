import React from "react";
import cx from "classnames";

import "./Button.scss";

const Button = ({
  children,
  className = "",
  loading = [false],
  disabled,
  ...props
}) => {
  const classes = cx("Button", className);

  const [isLoading, loadingText] = loading;

  const getButtonText = () => {
    if (isLoading) {
      return loadingText;
    }
    return children;
  };

  return (
    <button disabled={isLoading || disabled} className={classes} {...props}>
      {getButtonText()}
    </button>
  );
};

export default Button;
