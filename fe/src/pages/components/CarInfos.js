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
            <div className="title">Biển số</div>
            <div className="value">{car?.number_plate}</div>
          </div>
        </div>
        <div className="main-info">
          <CogIcon />
          <div className="t-value">
            <div className="title">Đời xe</div>
            <div className="value">2018</div>
          </div>
        </div>
        <div className="main-info">
          <CogIcon />
          <div className="t-value">
            <div className="title">Hãng xe</div>
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
      <div style={{color: '#767676', fontSize: 15}} className="description">
        <div className="title">Mô tả</div>
        <div className="value">{car?.description}</div>
      </div>
      <pre style={{color: '#767676', fontSize: 15, overflow: 'hidden', textOverflow: 'ellipsis', width : '700px'}} className="mt-5">Quy định khác:{"\n"}◦ Sử dụng xe đúng mục đích.{"\n"}◦ Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật.{"\n"}◦ Không sử dụng xe thuê để cầm cố, thế chấp.{"\n"}◦ Không hút thuốc, nhả kẹo cao su, xả rác trong xe.{"\n"}◦ Không chở hàng quốc cấm dễ cháy nổ.{"\n"}◦ Không chở hoa quả, thực phẩm nặng mùi trong xe.{"\n"}◦ Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe.{"\n"}Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi tuyệt vời !{"\n"}{"                "}</pre>
    </div>
  );
};

export default CarInfos;
