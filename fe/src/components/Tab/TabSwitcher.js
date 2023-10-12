import React from "react";
import cx from "classnames";

import "./TabSwitcher.scss";

const TabSwitcher = ({ option, options, setOption, className = "" }) => {
  const classes = cx("TabSwitcher", className);

  return (
    <div className={classes}>
      {options.map((op) => {
        return (
          <div
            className={cx("TabSwitcher-option", {
              actived: op === option,
            })}
            key={op}
            onClick={() => {
              setOption(op);
            }}
          >
            {op}
          </div>
        );
      })}
    </div>
  );
};

export default TabSwitcher;
