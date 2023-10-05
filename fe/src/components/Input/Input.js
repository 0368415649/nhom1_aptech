import React, { useState } from 'react';
import styled from 'styled-components';

const Input = ({ label, error, placeholder = ' ', ...props }) => {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <Wrapper>
      <BaseInput
        autoComplete="off"
        placeholder={placeholder}
        onBlur={() => setIsDirty(true)}
        {...props}
      />
      {label && <div className="label">{label}</div>}
      {isDirty && error && <div className="error">{error}</div>}
    </Wrapper>
  );
};

const BaseInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid #d8dae5;
  font-size: 16px;
  position: absolute;
  inset: 0;

  &:focus {
    border-color: #5fcf86;
  }

  &:not(:placeholder-shown) + .label,
  &:focus + .label {
    top: 0;
    padding: 4px 8px;
    background-color: #fff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  height: 40px;

  .label {
    font-size: 14px;
    color: #717070;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    z-index: 2;
    transition: 250ms;
    pointer-events: none;
  }

  .error {
    font-size: 14px;
    color: red;
    font-weight: 500;
  }
`;

export default Input;
