import React, { useState } from 'react';
import cx from 'classnames';

import './styles/Input.scss';
import { EyeIcon, EyeSlashIcon } from '../Svg';
import { checkValidAndCloneElement } from '../../utils/common';

const Input = ({
  className = '',
  button,
  type = 'text',
  isPasswordInput,
  startIcon,
  ...props
}) => {
  const classes = cx('Input', className);
  const [inputType, setInputType] = useState(
    isPasswordInput ? 'password' : type
  );

  const toggleInputType = () => {
    if (!isPasswordInput) return type;
    setInputType((prev) => (prev === 'text' ? 'password' : 'text'));
  };

  return (
    <div className={classes}>
      {checkValidAndCloneElement(startIcon, {
        className: 'input-start-icon',
      })}
      <input type={inputType} {...props} />
      {checkValidAndCloneElement(button, {
        className: 'input-button',
      })}
      {isPasswordInput && (
        <>
          {inputType === 'text' ? (
            <EyeSlashIcon className="hide-password" onClick={toggleInputType} />
          ) : (
            <EyeIcon className="show-password" onClick={toggleInputType} />
          )}
        </>
      )}
    </div>
  );
};

export default Input;
