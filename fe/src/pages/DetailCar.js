import React, { useEffect, useState } from 'react';

import CarInfos from './components/CarInfos';
import ActionRent from './components/ActionRent';
import Img from '../components/Img';

import './styles/DetailCar.scss';
import { useParams } from 'react-router-dom';
import http from '../utils/http';

const DetailCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await http.get('/get_details_car', {
          params: {
            id,
          },
        });
        setCar(data);
      } catch (error) {
        console.log('>> Check | error:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

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
        <CarInfos car={car} />
        <ActionRent car={car} />
      </div>
    </div>
  );
};

export default DetailCar;
