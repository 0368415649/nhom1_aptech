import React, { useState } from 'react';

import Modal from './Modal';
import Button from '../Button';
import Input from '../Input';
import UploadImage from '../UploadImage/UploadImage';

import useForm from '../../hooks/useForm';

import { CITIZEN_IDENTIFICATION_NUMBER } from '../../constants/regexs';

import './styles/VerifyIdentificationModal.scss';
import DatePicker from '../DatePicker';
import { getUnixTimeInSecond } from '../../utils/dates';

const rules = {
  identificationNumber: {
    required: 'Số CCCD không được để trống',
    option: (value) => {
      if (CITIZEN_IDENTIFICATION_NUMBER.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Số CCCD không hợp lệ',
  },
  fullName: {
    required: 'Họ và tên không được để trống',
  },
  dateOfBirth: {
    required: 'Ngày sinh không được để trống',
  },
};

const VerifyIdentification = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [date, setDate] = useState(getUnixTimeInSecond(new Date()));

  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError },
  } = useForm(rules);

  const submitVerifyIndentity = console.log;

  return (
    <Modal
      className="VerifyIdentificationModal"
      label="Xác minh danh tính"
      {...props}
    >
      {!isConfirmed && (
        <div className="confirm-action">
          <div className="title">Bạn cần xác minh danh tính để đăng ký xe</div>
          <Button size="lg" onClick={() => setIsConfirmed(true)}>
            Tiến hành xác minh
          </Button>
        </div>
      )}

      {isConfirmed && (
        <form className="Login" onSubmit={handleSubmit(submitVerifyIndentity)}>
          <div className="input-section">
            <div className="label">Số CCCD</div>
            <Input {...register('identificationNumber')} />
            {dirtyErrors['identificationNumber'] && (
              <span className="invalid">
                {dirtyErrors['identificationNumber']}
              </span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Họ và tên</div>
            <Input {...register('fullName')} />
            {dirtyErrors['fullName'] && (
              <span className="invalid">{dirtyErrors['fullName']}</span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Ngày sinh</div>
            <DatePicker
              value={date}
              onChange={setDate}
              className="date-input"
            />
          </div>
          <div className="images">
            <div className="image">
              <div className="label">Mặt trước CCCD</div>
              <UploadImage
                className="identity"
                {...register('identificationNumber')}
              />
            </div>
            <div className="image">
              <div className="label">Mặt sau CCCD</div>
              <UploadImage className="identity" />
            </div>
          </div>
          <Button size="lg" className="verify-btn" disabled={isError}>
            Xác minh
          </Button>
        </form>
      )}
    </Modal>
  );
};

export default VerifyIdentification;
