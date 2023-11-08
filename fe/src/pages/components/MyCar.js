import React from 'react';

import CarRow from './CarRow';

import './styles/MyCar.scss';

const MyCar = () => {
  return (
    <div className="Tab-content MyCar">
      {Array(3)
        .fill(null)
        .map((i, k) => (
          <CarRow key={k} />
        ))}
    </div>
  );
};

export default MyCar;
