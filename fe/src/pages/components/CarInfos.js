import React from 'react';

import Img from '../../components/Img';
import {
  BriefcaseIcon,
  CogIcon,
  HeartIcon,
  LiquidIcon,
  StarSolidIcon,
  UsersIcon,
} from '../../components/Svg';
import Button from '../../components/Button';

import './styles/CarInfos.scss';

const CarInfos = ({ car }) => {
  return (
    <div className="CarInfos">
      <div className="infos">
        <div className="base-infos">
          <div className="name">{car?.model_name}</div>
          <div className="car-info">
            <div className="block-info">
              <StarSolidIcon className="star-icon icon" />
              <span>{car?.rate || '5.0'}</span>
            </div>
            <div className="block-info">
              <BriefcaseIcon className="icon" />
              <span>{car?.count_journeys} chuyến</span>
            </div>
          </div>
        </div>
        <Button variant="outline" className="like-btn">
          <HeartIcon />
        </Button>
      </div>
      <div className="main-infos">
        <div className="main-info">
          <UsersIcon />
          <div className="t-value">
            <div className="title">Số ghế</div>
            <div className="value">{car?.number_seats} chỗ</div>
          </div>
        </div>
        <div className="main-info">
          <CogIcon />
          <div className="t-value">
            <div className="title">Mẫu xe</div>
            <div className="value">{car?.brand_name}</div>
          </div>
        </div>
        {/* <div className="main-info">
          <LiquidIcon />
          <div className="t-value">
            <div className="title">Nhiên liệu</div>
            <div className="value">Xăng</div>
          </div>
        </div> */}
      </div>
      <div className="description">
        <div className="title">Mô tả</div>
        <div className="value">{car?.description}</div>
      </div>
      <div className="term">
        <div className="title">Điều khoản</div>
        <div className="value">{/* {car?.} */}</div>
      </div>
    </div>
  );
};

export default CarInfos;
