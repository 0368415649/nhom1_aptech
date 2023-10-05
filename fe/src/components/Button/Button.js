import React from "react";
import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};

const BaseButton = styled.button`
  font-weight: 700;
  color: #fff;
  background-color: #5fcf86;
  border-color: #5fcf86;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #cccccc;
    color: #888888;
    cursor: not-allowed;
  }
`;

export default Button;
