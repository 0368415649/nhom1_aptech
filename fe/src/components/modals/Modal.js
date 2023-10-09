import React from 'react';
import cx from 'classnames';

import { TimesIcon } from '../Svg';

import './styles/Modal.scss';

const Modal = ({ children, onDismiss, label, className = '' }) => {
  const classes = cx('Modal', className);
  return (
    <div className={classes}>
      <div className="heading">
        <div className="label">{label}</div>
        <TimesIcon onClick={onDismiss} className="close-btn" />
      </div>
      <div className="body">{children}</div>
    </div>
  );
};

export default Modal;
