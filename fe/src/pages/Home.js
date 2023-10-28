import React, { useState } from 'react';

import Filter from './components/Filter';
import Cars from './components/Cars';
import DatePicker from '../components/DatePicker';

import { getUnixTimeInSecond } from '../utils/dates';

import '../assets/imgs/img1.png';

import './styles/Home.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [filter, setFilter] = useState({});
  console.log('>> Check | filter:', filter);
  return (
    <div className="Home page-layout large-margin">
      <Filter filter={filter} setFilter={setFilter} />
      <Cars filter={filter} />
    </div>
  );
};

export default Home;
