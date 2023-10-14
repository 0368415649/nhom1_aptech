import React from 'react';

import Input from '../../components/Input';

import './styles/ActionRent.scss';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';

const options = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
];

const ActionRent = () => {
  return (
    <div className="ActionRent">
      <div className="price">
        <span>2,480K</span>/ngày
      </div>
      <div className="pick-date">
        <div className="title">Ngày nhận xe</div>
        <div className="pick">
          <Input type="date" className="date-input" />
          <Dropdown
            className="time-dropdown"
            options={options}
            // setOption={setValue}
          />
        </div>
      </div>
      <div className="pick-date">
        <div className="title">Ngày trả xe</div>
        <div className="pick">
          {' '}
          <Input type="date" className="date-input" />
          <Dropdown
            className="time-dropdown"
            options={options}
            // setOption={setValue}
          />
        </div>
      </div>
      <div className="address">
        <div className="title">Địa chỉ giao/nhận xe</div>
        <div className="value">Hoàng Mai - Hà Nội</div>
      </div>
      <div className="fee">
        <div className="title">Phí thuê xe</div>
        <div className="value">
          <span>2,750K </span>x15 ngày
        </div>
      </div>
      <div className="total-fee">
        <div className="title">Tổng cộng</div>
        <div className="value">2,750K</div>
      </div>
      <Button size="lg">Thuê xe</Button>
    </div>
  );
};

export default ActionRent;
