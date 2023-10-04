import React from 'react';
import styled from 'styled-components';

const Input = ({ label, error, ...props }) => {
  return (
    <Wrapper>
      {label && <div className="label">{label}</div>}
      <BaseInput autocomplete="off" {...props} />
      {error && <div className="error">{label}</div>}
    </Wrapper>
  );
};

const BaseInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid #d8dae5;
  height: 40px;
  font-size: 16px;

  &:focus {
    border-color: #5fcf86;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .label {
    font-size: 14px;
    color: #717070;
    font-weight: 500;
    margin-bottom: 3px;
  }

  .error {
    font-size: 14px;
    color: red;
    font-weight: 500;
  }
`;

export default Input;
