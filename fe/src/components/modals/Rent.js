import React from 'react';

import Modal from './Modal';
import Button from '../Button';
import Input from '../Input';

import './styles/Rent.scss';

const Rent = (props) => {
  return (
    <Modal className="Rent" label="Xác nhận thông tin" {...props}>
      <div class="grap_com mt-4">
        <div class="row comfirm_infor">
          <div class="col-7 fs-6 text-black-50">Tên xe</div>
          <div class="col-5 fw-bold">VINFAST FADIL 2019</div>
        </div>
        <div class="row comfirm_infor mt-3">
          <div class="col-7 fs-6 text-black-50 ">Ngày bắt đầu thuê</div>
          <div class="col-5 fw-bold"> 01-01-2000 - 09:00</div>
        </div>
        <div class="row comfirm_infor mt-3">
          <div class="col-7 fs-6 text-black-50 ">Ngày bắt kết thúc thuê</div>
          <div class="col-5 fw-bold"> 01-01-2000 - 10:00</div>
        </div>
        <div class="row comfirm_infor mt-3">
          <div class="col-7 fs-6 text-black-50 ">Tổng số tiền</div>
          <div class="col-5 fw-bold">2 750 000đ</div>
        </div>
        <div class="row comfirm_infor mt-3">
          <div class="col-7 fs-6 text-black-50 ">Tên người thuê</div>
          <div class="col-5 fw-bold">Trần văn B</div>
        </div>
        <div class="row mt-3">
          <div class="col-7 fs-6 text-black-50 ">Số điện thoại</div>
          <div class="col-5 fw-bold">036841569</div>
        </div>
      </div>
      <div className="input-section">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="label">Số điện thoại</div>
          <div className="label">Sử dụng địa chỉ đã có</div>
        </div>
        <Input />
        {/* <Input {...register('phone')} /> */}
        {/* {dirtyErrors['phone'] && (
          <span className="invalid">{error || dirtyErrors['phone']}</span>
        )} */}
      </div>
      <Button className="mt-4">Thuê</Button>
    </Modal>
  );
};

export default Rent;
