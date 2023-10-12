import React from "react";

import Img from "../../components/Img";
import Button from "../../components/Button";

import { BriefcaseIcon, StarSolidIcon } from "../../components/Svg";

import "./styles/CarRow.scss";

const CarRow = () => {
  return (
    <div className="CarRow">
      <Img
        src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mg_5_luxury_2022/p/g/2023/03/14/12/0qunI422EmCFfaB-Fhk2UQ.jpg"
        alt="car"
        className="car-img"
      />
      <div className="info">
        <div className="name">Porsche Unveils Two Models</div>
        <div className="car-info">
          <div className="block-info">
            <StarSolidIcon className="star-icon icon" />
            <span>5.0</span>
          </div>
          <div className="block-info">
            <BriefcaseIcon className="icon" />
            <span>194 chuyến</span>
          </div>
          <div className="car-price">
            <span className="price">278K</span>/ngày
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
