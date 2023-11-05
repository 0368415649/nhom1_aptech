import React, { useState } from 'react';

import Input from '../../components/Input';

import './styles/ActionRent.scss';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import { getUnixTimeInSecond } from '../../utils/dates';
import useModal from '../../hooks/useModal';
import Rent from '../../components/modals/Rent';
import { convertPrice } from '../../utils/common';

const options = Array(24)
  .fill(null)
  .map((_, i) => ({
    label: `${i}:00`,
    value: i,
  }));

const ActionRent = ({ car }) => {
  const [value, setValue] = useState(getUnixTimeInSecond(new Date()));
  const [invisibleRenModal] = useModal(<Rent />);

  return (
    <div className="ActionRent">
      <div className="price">
        <span>{convertPrice(car?.price)}K</span>/ngày
      </div>
      <div className="pick-date">
        <div className="title">Ngày nhận xe</div>
        <div className="pick">
          <Input
            type="date"
            className="date-input"
            // {...register('dateOfBirth')}
          />
          <Dropdown
            className="time-dropdown"
            options={options}
            setOption={setValue}
            placeholder={options[0].label}
          />
        </div>
      </div>
      <div className="pick-date">
        <div className="title">Ngày trả xe</div>
        <div className="pick">
          <Input
            type="date"
            className="date-input"
            // {...register('dateOfBirth')}
          />
          <Dropdown
            className="time-dropdown"
            options={options}
            setOption={setValue}
            placeholder={options[0].label}
          />
        </div>
      </div>
      <div className="address">
        <div className="title">Địa chỉ giao/nhận xe</div>
        <div className="value">{car?.address}</div>
      </div>
      <div className="fee">
        <div className="title">Phí thuê xe</div>
        <div className="value">
          <span>{convertPrice(car?.price)}K </span>x15 ngày
        </div>
      </div>
      <div className="total-fee">
        <div className="title">Tổng cộng</div>
        <div className="value">{convertPrice(car?.price)}K</div>
      </div>
      <Button size="lg" onClick={invisibleRenModal}>
        Thuê xe
      </Button>
    </div>
  );
};

export default ActionRent;
