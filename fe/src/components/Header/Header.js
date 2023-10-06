import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Login from '../modals/Login';
import Register from '../modals/Register';
import useModal from '../../hooks/useModal';

import logo from '../../assets/imgs/logo.png';
import avatar from '../../assets/imgs/luffy.jpg';

const Header = () => {
  const [showLogin] = useModal(<Login />);
  const [showRegister] = useModal(<Register />);
  const isLogin = true;
  return (
    <BaseHeader className="d-flex justify-content-between">
      <a className="logo" href="">
        <div className="logo-img">
          <img src={logo} height="30px" alt="logo" />
        </div>
      </a>
      <div className="grap-hf-left d-flex justify-content-center">
        <div className="ADDDA-css">
          <a href="">Về ADDDA</a>
        </div>
        <div className="sen-css"></div>
        {isLogin ? (
          <Link to="/profile">
            <div class="icon-dd">
              <img src={avatar} alt="avatar" height="40px" width="40px" />
            </div>
            <div class="name_dd">
              <button>Hoàng Anh</button>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </Link>
        ) : (
          <>
            <div className="dk-css">
              <button onClick={showRegister}>Đăng ký</button>
            </div>
            <div className="dn-css">
              <button onClick={showLogin}>Đăng Nhập</button>
            </div>
          </>
        )}
      </div>
    </BaseHeader>
  );
};

const BaseHeader = styled.div`
  padding: 2px 280px 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(223, 223, 223);

  .grap-hf-left a {
    text-decoration: none;
    color: black;
  }

  .grap-hf-left {
    font-size: 14px;
    color: black;
    font-weight: 500;
    margin-left: auto;
    align-items: center;
  }

  .ADDDA-css {
    margin-right: 0px;
  }

  .dn-css button {
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
  }

  .dk-css button {
    background-color: white;
    border: none;
    font-weight: 500;
    margin-right: 25px;
  }

  .sen-css {
    width: 1px;
    height: 25px;
    margin: 0px 30px;
    background-color: rgb(216, 216, 216);
  }

  .tx-css {
    font-size: 15px;
    padding-left: 40px;
  }

  .icon-dd img {
    border-radius: 100%;
    margin-right: 15px;
    cursor: pointer;
  }

  .name_dd button {
    background-color: white;
    border: none;
    font-weight: 500;
    margin-right: 25px;
  }

  .name_dd {
    cursor: pointer;
  }
`;

export default Header;
