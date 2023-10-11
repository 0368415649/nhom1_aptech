import React from 'react';

import Img from '../../components/Img';
import { AddressIcon, StarIcon, VehicleIcon } from '../../components/Svg';

import porsche from '../../assets/imgs/poscher.jpg';

import './styles/CarCard.scss';

const CarCard = () => {
  return (
    <div className="CarCard">
      <div className="imgs">
        <Img
          className="car"
          src={porsche}
          width="100%"
          height="170px"
          alt="car-img"
        />
        {/* <Img src={avatar} className="avatar" alt="avatar" /> */}
      </div>
      <div className="car-details">
        <div className="car-name">AUGMENTED REALITY</div>
        <div className="address">
          <AddressIcon className="address-icon" />
          <span>Japan-fukuoka-kitakyushushi</span>
        </div>
        <div className="divider" />
        <div className="car-info">
          <div className="block-info">
            <StarIcon className="icon" />
            <span>5.0</span>
          </div>
          <div className="block-info">
            <VehicleIcon className="icon" />
            <span>194 chuyến</span>
          </div>
        </div>
        <div className>
          Giá : <span className="prire_color_ne">278K</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
