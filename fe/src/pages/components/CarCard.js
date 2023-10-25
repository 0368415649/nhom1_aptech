import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../../components/Img';
import Button from '../../components/Button';
import {
  AddressIcon,
  BriefcaseIcon,
  StarSolidIcon,
} from '../../components/Svg';

import porsche from '../../assets/imgs/poscher.jpg';

import './styles/CarCard.scss';

const CarCard = ({ car }) => {
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
      </div>
      <div className="car-details">
        <div className="car-name">{car?.model_name}</div>
        <div className="block-info">
          <AddressIcon className="icon" />
          <span>{car?.address}</span>
        </div>
        <div className="car-info">
          <div className="block-info">
            <StarSolidIcon className="star-icon icon" />
            <span>5.0</span>
          </div>
          <div className="block-info">
            <BriefcaseIcon className="icon" />
            <span>194 chuyến</span>
          </div>
        </div>
        <div className="price">Giá: {car?.price}</div>
        <div className="actions">
          <Button as={Link} to={`/car/${car?.car_id}`} variant="outline">
            Chi tiết
          </Button>
          <Button>Thuê</Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
