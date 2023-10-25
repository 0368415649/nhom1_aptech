import React, { useState } from 'react';
import cx from 'classnames';

import './styles/Input.scss';
import { EyeIcon, EyeSlashIcon } from '../Svg';
import { checkValidAndCloneElement } from '../../utils/common';
import { preventSpecialCharacters } from '../../utils/input';

const Input = ({
  className = '',
  button,
  type = 'text',
  isPasswordInput,
  startIcon,
  suffix,
  isNumberInput,
  ...props
}) => {
  const classes = cx('Input', className);
  const [inputType, setInputType] = useState(
    isNumberInput ? 'number' : isPasswordInput ? 'password' : type
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
      <input
        type={inputType}
        {...props}
        onKeyDown={isNumberInput && preventSpecialCharacters}
      />
      {suffix && <span className="suffix">{suffix}</span>}
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
