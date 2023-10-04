import React from 'react';
import styled from 'styled-components';

import Modal from './Modal';

const Login = (props) => {
  return (
    <Modal label="Đăng nhập" {...props}>
      <BaseLogin>
        <div class="text_phone">Số điện thoại</div>
        <div>
          <input class="input_css" />
        </div>
        <div class="text_phone">Mật Khẩu</div>
        <div>
          <input class="input_css" type="password" />
        </div>
        <div class="text_pass">
          <div class="btn_fo">Quên mật khẩu</div>
        </div>
        <div class="text-center">
          <div class="btn_login">Đăng nhập</div>
        </div>
        <div class="text-center">
          <div class="text_r">
            Bạn chưa là thành viên? <div className="switch">Đăng ký ngay</div>
          </div>
        </div>
      </BaseLogin>
    </Modal>
  );
};

const BaseLogin = styled.div`
  .text_phone {
    font-size: 14px;
    color: #717070;
    font-weight: 500;
    margin-bottom: 3px;
    margin: 5px 0px;
  }

  .input_css {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #d8dae5;
  }

  .text_pass {
    display: flex;
    justify-content: end;
    padding: 10px 0px 20px;
    color: #64d089;
    font-size: 14px;
    font-weight: 600;
  }

  .btn_fo {
    cursor: pointer;
  }

  .btn_login {
    cursor: pointer;
    font-weight: 700;
    color: #fff;
    background-color: #5fcf86;
    border-color: #5fcf86;
    padding: 14px 0px;
    border-radius: 10px;
  }

  .text_r {
    font-size: 14px;
    margin-top: 20px;
  }

  .switch {
    color: #39b062;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default Login;
