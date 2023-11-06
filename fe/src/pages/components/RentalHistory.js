import React, { useState } from 'react';

import CarRow from './CarRow';

import './styles/RentalHistory.scss';
import TabSwitcher from '../../components/Tab/TabSwitcher';

const ALL = 'Tất cả';
const WAITING_FOR_CONFIRM = 'Chờ xác nhận';
const WAITING_FOR_DELIVERY = 'Chờ giao xe';
const LEASING = 'Đang thuê xe';
const FINISH = 'Đã hoàn thành';
const CANCELED = 'Đã huỷ';

const TAB_OPTIONS = [
  ALL,
  WAITING_FOR_CONFIRM,
  WAITING_FOR_DELIVERY,
  LEASING,
  FINISH,
  CANCELED,
];

const RentalHistory = () => {
  const [currentTab, setCurrentTab] = useState(ALL);
  return (
    <div className="Tab-content RentalHistory">
      <TabSwitcher
        option={currentTab}
        setOption={setCurrentTab}
        options={TAB_OPTIONS}
        className="Tab-status"
      />
      {Array(3)
        .fill(null)
        .map((i, k) => (
          <CarRow key={k} />
        ))}
    </div>
  );
};

export default RentalHistory;
