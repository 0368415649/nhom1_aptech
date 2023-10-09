import React from 'react';
import cx from 'classnames';

import './Dropdown.scss';
import { ChevronDownIcon } from '../Svg';
import useToggle from '../../hooks/useToggle';

const Dropdown = ({ className = '', options = [], onChange, ...props }) => {
  const [isShow, setIsShow] = useToggle();

  const classes = cx('Dropdown', className);

  const handleSelectOption = (e, option) => {
    onChange(e);
  };

  return (
    <div className={classes} onClick={setIsShow} {...props}>
      <ChevronDownIcon className="chevron-down-icon" />
      {isShow && (
        <div className="options">
          {options.map((option) => {
            return (
              <div
                key={option.label}
                className="option"
                onClick={(e) => handleSelectOption(e, option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
