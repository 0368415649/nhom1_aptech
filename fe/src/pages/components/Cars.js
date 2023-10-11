import React from 'react';

import porsche from '../../assets/imgs/poscher.jpg';
import avatar from '../../assets/imgs/luffy.jpg';

import './styles/Cars.scss';
import CarCard from './CarCard';

const Cars = () => {
  return (
    <div className="Cars">
      {Array(5)
        .fill(null)
        .map((i, k) => {
          return <CarCard key={k} />;
        })}
    </div>
  );
};

export default Cars;
