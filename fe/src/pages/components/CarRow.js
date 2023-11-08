import React from 'react';

import Img from '../../components/Img';
import Button from '../../components/Button';

import { BriefcaseIcon, StarSolidIcon } from '../../components/Svg';

import './styles/CarRow.scss';
import { IMAGES_URL } from '../../configs/urls';
import { convertPrice } from '../../utils/common';

const CarRow = ({ car }) => {
  const carImage = car?.image?.split('-')[0];

  return (
    <div className="CarRow">
      {/* <Img src="" /> */}
      <Img className="car-img" src={`${IMAGES_URL}/${carImage}`} alt="car" />

      <div className="info">
        <div className="status">Trạng thái: {car?.car_status_name}</div>
        <div className="name">{car?.model_name}</div>
        <div className="car-info">
          <div className="block-info">
            <StarSolidIcon className="star-icon icon" />
            <span>5.0</span>
          </div>
          <div className="block-info">
            <BriefcaseIcon className="icon" />
            <span>{car?.count_journeys} chuyến</span>
          </div>
          <div className="car-price">
            <span className="price">{convertPrice(+car?.price)}</span>/ngày
          </div>
        </div>
        <div className="actions">
          <Button>Bỏ thích</Button>
          <div className="view">Xem chi tiết</div>
        </div>
      </div>
    </div>
  );
};

export default CarRow;
