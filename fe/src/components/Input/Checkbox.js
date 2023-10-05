import React from "react";
import styled, { css } from "styled-components";

const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <Wrapper onClick={onChange}>
      <BaseCheckbox $isChecked={isChecked} />
      {label}
    </Wrapper>
  );
};

const BaseCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      border-color: red;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export default Checkbox;
