import { useState } from "react";
import styled, { css } from "styled-components";

function useCheckbox(label, defaultState) {
  const [isChecked, setIsChecked] = useState(!!defaultState);

  const Checkbox = () => {
    const handleToogle = () => {
      setIsChecked((prev) => !prev);
    };

    return (
      <Wrapper onClick={handleToogle}>
        <BaseCheckbox $isChecked={isChecked} />
        {label}
      </Wrapper>
    );
  };

  return { isChecked, setIsChecked, Checkbox };
}

const BaseCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      background-color: rgba(95, 207, 134, 0.6);
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  cursor: pointer;
`;

export default useCheckbox;
