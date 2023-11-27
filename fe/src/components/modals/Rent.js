import React, { useEffect, useState } from 'react';

import Modal from './Modal';
import Button from '../Button';
import Input from '../Input';

import './styles/Rent.scss';
import { convertPrice } from '../../utils/common';
import { useUserContext } from '../../contexts/User';
import http from '../../utils/http';
import useForm from '../../hooks/useForm';
import useModal from '../../hooks/useModal';
import MyAddressModal from './MyAddress';

const rules = {
  address: {
    required: 'Địa chỉ không được để trống',
  },
};

const Rent = ({ car, data, daysCount, ...props }) => {
  const { user } = useUserContext();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const renderDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/show_address', {
          params: {
            customer_id: user?.id || localStorage.getItem('USER_ID'),
          },
        });
        setAddresses(data || []);
      } catch (error) {}
    })();
  }, [user?.id]);

  const {
    register,
    formState: { dirtyErrors, isError, data: formData },
  } = useForm(rules);

  const submit = async () => {
    try {
      const { data: responseData } = await http.post('/create_booking', {
        start_date: data.receiveDate,
        start_time: data.receiveHour,
        end_date: data.giveBackDate || 0,
        end_time: data.giveBackHour || 0,
        total: +car?.price * daysCount,
        address: formData['address'],
        create_by: user?.id || localStorage.getItem('USER_ID'),
        car_id: car.car_id,
      });

      if (responseData.status === 1) {
        window.location.href = '/profile/rental';
      }
    } catch (error) {
      console.log('>> Check | error:', error);
    }
  };

  return (
    <Modal className="Rent" label="Xác nhận thông tin" {...props}>
      <div class="grap_com mt-2">
        <div class="row comfirm_infor">
          <div class="col-7 fs-6 text-black-50">Tên xe</div>
          <div class="col-5 fw-bold">{car?.model_name}</div>
        </div>
        <div class="row comfirm_infor mt-3">
          <div class="col-7 fs-6 text-black-50 ">Ngày bắt đầu thuê</div>
          <div class="col-5 fw-bold">
            {renderDate(data.receiveDate)} | {data.receiveHour || '0'}:00
          </div>
        </div>
        <div class="row comfirm_infor mt-3">
          <div class="col-7 fs-6 text-black-50 ">Ngày bắt kết thúc thuê</div>
          <div class="col-5 fw-bold">
            {renderDate(data.giveBackDate)} | {data.giveBackHour || '0'}:00
          </div>
        </div>
        <div class="row comfirm_infor mt-3">
          <div class="col-7 fs-6 text-black-50 ">Tổng số tiền</div>
          <div class="col-5 fw-bold">
            {convertPrice(+car?.price * daysCount)}
          </div>
        </div>
        <div class="row comfirm_infor mt-3">
          <div class="col-7 fs-6 text-black-50 ">Tên người thuê</div>
          <div class="col-5 fw-bold">{user?.name_display}</div>
        </div>
        <div class="row mt-3">
          <div class="col-7 fs-6 text-black-50 ">Số điện thoại</div>
          <div class="col-5 fw-bold">{user?.phone}</div>
        </div>
      </div>
      <div className="input-section">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="label">Địa chỉ</div>
        </div>
        <Input
          {...register('address')}
          autoFocus
          className={`${data['address'] && !selectedAddress ? 'active' : ''}`}
        />
        {dirtyErrors['address'] && !selectedAddress && (
          <span className="invalid">{dirtyErrors['address']}</span>
        )}
        {addresses.length > 0 && (
          <>
            <div className="label adddress_a">Sử dụng địa chỉ đã có</div>
            <div>
              {addresses.map((address) => (
                <div
                  onClick={() => setSelectedAddress(address)}
                  key={address.address_id}
                  className={`clickable address-row d-flex align-items-center justify-content-between mt-2 ${
                    selectedAddress &&
                    !data['address'] &&
                    address.address_id === selectedAddress.address_id
                      ? 'active'
                      : ''
                  }`}
                >
                  <div className="ms-3">{address.address_name}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="text-center">
        <Button
          disabled={isError && !selectedAddress}
          onClick={submit}
          className="btn_buyy"
        >
          Thuê
        </Button>
      </div>
    </Modal>
  );
};

export default Rent;
