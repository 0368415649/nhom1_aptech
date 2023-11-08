import React, { useEffect, useState } from 'react';

import Img from '../../components/Img';
import Button from '../../components/Button';
import './styles/CarRow.scss';
import { IMAGES_URL } from '../../configs/urls';
import { convertPrice } from '../../utils/common';
import { RENTAL_TAB_OPTIONS } from './RentalHistory';
import http from '../../utils/http';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CarRowRent = ({ car }) => {
  const carImage = car?.image?.split('-')[0];
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isReLoad = JSON.parse(searchParams.get('re-load'));

    if (isReLoad) {
      searchParams.delete('re-load');
      navigate('/profile?tab-index=4', { replace: true });
      window.location.reload();
    }
  }, [navigate, searchParams]);

  const cancel = async () => {
    try {
      const { data } = await http.put('/change_status_booking', {
        booking_id: car?.booking_id,
        boocking_status_id: 6,
      });
      if (data.status === 1) {
        window.location.href = '/profile?tab-index=4&re-load=true';
      }
    } catch (error) {
      setError('Không thành công, thử lại sau!');
    }
  };

  return (
    <div className="CarRow">
      <Img className="car-img" src={`${IMAGES_URL}/${carImage}`} alt="car" />

      <div className="info">
        <div className="status">
          Trạng thái: {RENTAL_TAB_OPTIONS[car?.boocking_status_id]}
        </div>
        <div className="name">{car?.model_name}</div>
        <div className="car-info">
          <div className="block-info smallTxt">
            Ngày bắt đầu:
            <span>
              {car?.start_date} - {car?.start_time}:00
            </span>
          </div>
          <div className="block-info smallTxt">
            Ngày trả xe:
            <span>
              {car?.end_date} - {car?.end_time}:00
            </span>
          </div>
          <div className="car-price">
            <span className="price">{convertPrice(+car?.total)}</span>/ngày
          </div>
          <div className="address">
            <div className="title">Địa chỉ giao xe: {car?.address}</div>
          </div>
        </div>
        {error && <div className="invalid">{error}</div>}
        {car?.boocking_status_id === 1 && (
          <div
            className="actions"
            style={{
              marginTop: 12,
            }}
          >
            <Button onClick={cancel}>Hủy thuê</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarRowRent;
