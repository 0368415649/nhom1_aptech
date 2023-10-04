import React, { Children } from 'react';
import styled from 'styled-components';

const Button = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};

const BaseButton = styled.button`
  font-weight: 700;
  color: #fff;
  background-color: #5fcf86;
  border-color: #5fcf86;
  padding: 14px 0px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
