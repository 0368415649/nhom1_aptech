import React, { useState } from 'react';

import Filter from './components/Filter';
import Cars from './components/Cars';
import DatePicker from '../components/DatePicker';

import { getUnixTimeInSecond } from '../utils/dates';

import './styles/Home.scss';

const Home = () => {
  const [value, setValue] = useState(getUnixTimeInSecond(new Date()));
  console.log('>> Check | value:', value);

  return (
    <div className="Home page-layout large-margin">
      <Filter />
      <Cars />
      <DatePicker value={value} onChange={setValue} />
    </div>
  );
};

export default Home;
