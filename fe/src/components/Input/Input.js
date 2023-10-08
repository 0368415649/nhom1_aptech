import React, { cloneElement, isValidElement } from 'react';
import cx from 'classnames';

import './styles/Input.scss';

const Input = ({ className = '', button, ...props }) => {
  const classes = cx('Input', className);

  return (
    <div className={classes}>
      <input {...props} />
      {button &&
        isValidElement(button) &&
        cloneElement(button, {
          className: 'input-button',
        })}
    </div>
  );
};

export default Input;
