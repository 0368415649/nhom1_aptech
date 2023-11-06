import React, { useEffect, useMemo, useState } from 'react';

import Input from '../../components/Input';

import './styles/ActionRent.scss';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import useModal from '../../hooks/useModal';
import Rent from '../../components/modals/Rent';
import { convertPrice } from '../../utils/common';
import useForm from '../../hooks/useForm';

const options = Array(24)
  .fill(null)
  .map((_, i) => ({
    label: `${i}:00`,
    value: i,
  }));

const rules = {
  receiveDate: {
    required: 'Ngày nhận xe không được để trống',
  },
  receiveHour: {},
  giveBackDate: {
    required: 'Ngày trả xe không được để trống',
  },
  giveBackHour: {},
};
function getTimeStamp(input) {
  var parts = input.trim().split(' ');
  var [year, month, date] = parts[0].split('-');
  var [hour] = (parts[1] ? parts[1] : '00:00:00').split(':');

  // NOTE:: Month: 0 = January - 11 = December.
  var d = new Date(year, month - 1, date, hour);
  return d.getTime() / 1000;
}
const ActionRent = ({ car }) => {
  console.log('>> Check | car:', car);
  const {
    register,
    setValue,
    formState: { isError, data },
  } = useForm(rules);

  const daysCount = useMemo(() => {
    const receiveDateUnix = getTimeStamp(
      `${data.receiveDate} ${data.receiveHour || 0}`
    );
    const giveBackDateUnix = getTimeStamp(
      `${data.giveBackDate} ${data.giveBackHour || 0}`
    );

    return Math.ceil((giveBackDateUnix - receiveDateUnix) / 60 / 60 / 24);
  }, [
    data.giveBackDate,
    data.giveBackHour,
    data.receiveDate,
    data.receiveHour,
  ]);

  const [invisibleRenModal] = useModal(
    <Rent car={car} data={data} daysCount={daysCount} />
  );
  return (
    <div className="ActionRent">
      <div className="price">
        <span>{convertPrice(car?.price)}</span>/ngày
      </div>
      <div className="pick-date">
        <div className="title">Ngày nhận xe</div>
        <div className="pick">
          <Input
            type="date"
            className="date-input"
            {...register('receiveDate')}
          />
          <Dropdown
            className="time-dropdown"
            options={options}
            setOption={setValue}
            placeholder={options[0].label}
            {...register('receiveHour')}
          />
        </div>
      </div>
      <div className="pick-date">
        <div className="title">Ngày trả xe</div>
        <div className="pick">
          <Input
            type="date"
            className="date-input"
            {...register('giveBackDate')}
          />
          <Dropdown
            className="time-dropdown"
            options={options}
            setOption={setValue}
            placeholder={options[0].label}
            {...register('giveBackHour')}
          />
        </div>
      </div>
      <div className="address">
        <div className="title">Địa chỉ giao/nhận xe</div>
        <div className="value">{car?.address}</div>
      </div>
      {!isNaN(daysCount) && daysCount > 0 && (
        <div className="fee">
          <div className="title">Phí thuê xe</div>
          <div className="value">
            <span>{convertPrice(car?.price)}</span> x{daysCount} ngày
          </div>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: 8,
        }}
      >
        {!isNaN(daysCount) && daysCount > 0 && (
          <div className="total-fee">
            <div className="title">Tổng cộng</div>
            <div className="value">{convertPrice(+car?.price * daysCount)}</div>
          </div>
        )}
        {!isNaN(daysCount) && daysCount < 0 && (
          <span className="invalid">Ngày nhận phải lớn hơn ngày trước</span>
        )}
        <Button
          disabled={isError || isNaN(daysCount) || daysCount <= 0}
          size="lg"
          onClick={invisibleRenModal}
        >
          Thuê xe
        </Button>
      </div>
    </div>
  );
};

export default ActionRent;
