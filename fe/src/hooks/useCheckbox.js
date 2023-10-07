import { useState } from "react";

import "../components/Input/styles/Checkbox.scss";

function useCheckbox(label, defaultState) {
  const [isChecked, setIsChecked] = useState(!!defaultState);

  const Checkbox = () => {
    const handleToogle = () => {
      setIsChecked((prev) => !prev);
    };

    return (
      <div className="Checkbox" onClick={handleToogle}>
        <div className={`handler ${isChecked ? "checked" : ""}`} />
        {label}
      </div>
    );
  };

  return { isChecked, setIsChecked, Checkbox };
}

export default useCheckbox;
