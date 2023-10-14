import React from 'react';

import CarInfos from './components/CarInfos';
import ActionRent from './components/ActionRent';
import Img from '../components/Img';

import './styles/DetailCar.scss';

const DetailCar = () => {
  return (
    <div className="DetailCar page-layout">
      <div className="images">
        <Img
          src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_lux_a_2021/p/g/2023/08/26/10/hynC9yY7PmwkabqydWu8zw.jpg"
          alt="car"
        />
        <Img
          src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_lux_a_2021/p/g/2023/08/26/10/hynC9yY7PmwkabqydWu8zw.jpg"
          alt="car"
        />
        <Img
          src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_lux_a_2021/p/g/2023/08/26/10/hynC9yY7PmwkabqydWu8zw.jpg"
          alt="car"
        />
        <Img
          src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_lux_a_2021/p/g/2023/08/26/10/hynC9yY7PmwkabqydWu8zw.jpg"
          alt="car"
        />
      </div>
      <div className="info-and-actions">
        <CarInfos />
        <ActionRent />
      </div>
    </div>
  );
};

export default DetailCar;
