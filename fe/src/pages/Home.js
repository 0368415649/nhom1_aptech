import React from 'react';

import Filter from './components/Filter';
import Cars from './components/Cars';

import './styles/Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <Filter />
      <Cars />
    </div>
  );
};

export default Home;
