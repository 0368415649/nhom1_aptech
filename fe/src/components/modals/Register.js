import React, { useState } from 'react';

import Modal from './Modal';
import Input, { Checkbox } from '../Input';
import Button from '../Button';
import useValidate from '../../hooks/useValidate';
import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from '../../contants/regexs';
import useCheckbox from '../../hooks/useCheckbox';

import './styles/Register.scss';
import useForm from '../../hooks/useForm';

const rules = {
  phone: {
    required: 'Số điện thoại không được để trống',
    option: (value) => {
      if (PHONE_NUMBER_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Số điện thoại không hợp lệ',
  },
  displayName: {
    required: 'Tên hiển thị không được để trống',
  },
  password: {
    required: 'Mật khẩu không được để trống',
    option: (value) => {
      if (PASSWORD_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Mật khẩu yếu, vui lòng thử mật khẩu khác',
  },
  confirmPassword: {
    required: 'Mật khẩu không được để trống',
    option: (value, form) => {
      if (form.password === value) {
        return true;
      }
      return false;
    },
    errorMsg: 'Mật khẩu không khớp',
  },
};

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isError },
  } = useForm(rules);
  const { isChecked, Checkbox } = useCheckbox(
    'Tôi đồng ý với chính sách của ADDDA'
  );

  const submitRegister = console.log;

  const isDisabled = !isChecked || isError;

  return (
    <Modal label="Đăng ký" {...props}>
      <form className="Register" onSubmit={handleSubmit(submitRegister)}>
        <div className="input-section">
          <div className="label">Số điện thoại</div>
          <Input {...register('phone')} />
          {errors['phone'] && (
            <span className="invalid">{errors['phone']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Tên hiển thị</div>
          <Input {...register('displayName')} />
          {errors['displayName'] && (
            <span className="invalid">{errors['displayName']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Mật khẩu</div>
          <Input {...register('password')} />
          {errors['password'] && (
            <span className="invalid">{errors['password']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Nhập lại mật khẩu</div>
          <Input {...register('confirmPassword')} />
          {errors['confirmPassword'] && (
            <span className="invalid">{errors['confirmPassword']}</span>
          )}
        </div>
        <Checkbox className="policy" />
        <Button className="full" disabled={isDisabled}>
          Đăng ký
        </Button>
      </form>
    </Modal>
  );
};

export default Register;
