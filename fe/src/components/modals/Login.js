import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import { PHONE_NUMBER_REGEX } from '../../contants/regexs';

const Login = (props) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // const [login, setLogin] = useState({
  //   phoneNumber: '',
  //   password: '',
  // });

  // const handleChangeInput = (e) => {
  //   const name = e.target.name;
  //   setLogin((prev) => ({
  //     ...prev,
  //     [name]: e.target.value,
  //   }));
  // };

  // const errorMessages = useMemo(() => {
  //   let errorsObj = {};
  //   for (const field in login) {
  //     const value = login[field];

  //     if (!value) {
  //       errorsObj[field] = 'Can not be empty';
  //     }
  //   }
  //   return errorsObj;
  // }, [login]);

  // let phoneNumberError;
  // if (phoneNumberError) {
  // }

  let phoneError;
  if (!phone) {
    phoneError = 'Can not be empty';
  }
  if (PHONE_NUMBER_REGEX.test(phone)) {
    phoneError = 'Invalid';
  }

  let passwordError;
  if (!password) {
    passwordError = 'Can not be empty';
  }
  if (PHONE_NUMBER_REGEX.test(password)) {
    passwordError = 'Invalid';
  }

  return (
    <Modal label="Đăng nhập" {...props}>
      <BaseLogin>
        <Input
          label="Số điện thoại"
          error={phoneError}
          name="phoneNumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            marginBottom: 16,
          }}
        />
        <Input
          label="Mật Khẩu"
          error={passwordError}
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forgot-password">Quên mật khẩu</div>
        <LoginButton>Đăng nhập</LoginButton>
        <div class="text-center">
          <div class="text_r">
            Bạn chưa là thành viên? <div className="switch">Đăng ký ngay</div>
          </div>
        </div>
      </BaseLogin>
    </Modal>
  );
};

const LoginButton = styled(Button)`
  width: 100%;
`;

const BaseLogin = styled.div`
  .text_r {
    font-size: 14px;
    margin-top: 20px;
  }

  .switch {
    color: #39b062;
    text-decoration: none;
    cursor: pointer;
  }

  .forgot-password {
    color: #39b062;
    font-weight: 500;
    text-align: right;
    cursor: pointer;
    margin: 8px 0;
  }
`;

export default Login;
