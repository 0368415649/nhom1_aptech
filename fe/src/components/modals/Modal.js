import React from 'react';
import cx from 'classnames';

import { TimesIcon } from '../Svg';

import './styles/Modal.scss';

const Modal = ({ children, onDismiss, label, className }) => {
  const classes = cx('Modal', className);
  return (
    <div className={classes}>
      <div className="heading">
        <div className="label">{label}</div>
        {/* <div class="close_button_grap" onClick={onDismiss}>
          <div class="btn_cls">
            <i class="fa-regular fa-circle-xmark icon-cl"></i>
          </div>
        </div> */}
        <TimesIcon onClick={onDismiss} style={{ cursor: 'pointer' }} />
      </div>
      <div className="body">{children}</div>
    </div>
  );
};

export default Modal;
