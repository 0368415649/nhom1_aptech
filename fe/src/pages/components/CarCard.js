import React from "react";

import Img from "../../components/Img";
import {
  AddressIcon,
  BriefcaseIcon,
  StarIcon,
  StarSolidIcon,
  VehicleIcon,
} from "../../components/Svg";

import porsche from "../../assets/imgs/poscher.jpg";

import "./styles/CarCard.scss";

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
        <div className="address">Hoang Mai - Ha Noi</div>
        <div className="car-name">Lamborghini Aventador</div>
        <div className="car-info">
          <div className="block-info">
            <StarSolidIcon className="star-icon icon" />
            <span>5.0</span>
          </div>
          <div className="block-info">
            <div className="car-count">
              <BriefcaseIcon className="icon" />
              <span>194 chuyến</span>
            </div>
            <div className="car-price">
              <span className="price">278K</span>/ngày
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
