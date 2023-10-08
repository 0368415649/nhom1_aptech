import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../modals/Login';
import Register from '../modals/Register';
import useModal from '../../hooks/useModal';

import logo from '../../assets/imgs/logo.png';
import avatar from '../../assets/imgs/luffy.jpg';

import './Header.scss';

const Header = () => {
  const [showRegister] = useModal(<Register />);
  const [showLogin] = useModal(<Login switchToRegister={showRegister} />);
  const isLogin = !true;
  return (
    <div className="Header">
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
            <div className="icon-dd">
              <img src={avatar} alt="avatar" height="40px" width="40px" />
            </div>
            <div className="name_dd">
              <button>Hoàng Anh</button>
              <i className="fa-solid fa-chevron-down"></i>
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
    </div>
  );
};

export default Header;
