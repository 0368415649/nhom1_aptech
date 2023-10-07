import React, { useState } from "react";
import cx from "classnames";

import "./Dropdown.scss";
import { ChevronDownIcon } from "../Svg";
import useToggle from "../../hooks/useToggle";

const Dropdown = ({
  className = "",
  options = [],
  option,
  setOption,
  placeholder = "Chọn",
}) => {
  const [isShow, setIsShow] = useToggle();

  const classes = cx("Dropdown", className);

  return (
    <div className={classes} onClick={setIsShow}>
      {option || placeholder}
      <ChevronDownIcon className="chevron-down-icon" />
      {isShow && (
        <div className="options">
          {options.map((option) => {
            return (
              <div
                key={option.label}
                className="option"
                onClick={() => setOption(option.label)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
