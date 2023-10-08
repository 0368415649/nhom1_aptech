import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from '../../contants/regexs';
import useValidate from '../../hooks/useValidate';

import './styles/Login.scss';
import useForm from '../../hooks/useForm';

const rules = {
  phone: {
    required: 'Số điện thoại không được để trống',
    options: (value) => {
      if (PHONE_NUMBER_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Số điện thoại không hợp lệ',
  },
  password: {
    required: 'Mật khẩu không được để trống',
  },
};

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isError },
  } = useForm(rules);

  const submitRegister = console.log;

  const switchToRegister = () => {
    props.onDismiss();
    props.switchToRegister();
  };

  return (
    <Modal label="Đăng nhập" {...props}>
      <form className="Login" onSubmit={handleSubmit(submitRegister)}>
        <div className="input-section">
          <div className="label">Số điện thoại</div>
          <Input {...register('phone')} />
          {errors['phone'] && (
            <span className="invalid">{errors['phone']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Mật khẩu</div>
          <Input {...register('password')} />
          {errors['password'] && (
            <span className="invalid">{errors['password']}</span>
          )}
        </div>
        <div className="forgot-password">Quên mật khẩu</div>
        <Button className="full" disabled={isError}>
          Đăng nhập
        </Button>
        <div className="text-center">
          <div className="text_r">
            Bạn chưa là thành viên?{' '}
            <div className="switch" onClick={switchToRegister}>
              Đăng ký ngay
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
