import React, { useState } from 'react';

import Img from '../components/Img';
import useModal from '../hooks/useModal';
import {
  AddressIcon,
  HeartIcon,
  LockIcon,
  LogoutIcon,
  MapIcon,
  PenIcon,
  UserIcon,
  VehicleIcon,
} from '../components/Svg';
import UpdateProfile from '../components/modals/UpdateProfile';
import Button from '../components/Button';

import './styles/Profile.scss';

const TABS = [
  { icon: UserIcon, title: 'Tài khoản của tôi' },
  { icon: HeartIcon, title: 'Xe yêu thích' },
  { icon: VehicleIcon, title: 'Xe của tôi' },
  { icon: MapIcon, title: 'Chuyến đi của tôi' },
  { icon: AddressIcon, title: 'Địa chỉ của tôi' },
  { icon: LockIcon, title: 'Đổi mật khẩu' },
  { icon: LogoutIcon, title: 'Đăng xuất' },
];

const Profile = () => {
  const [showUpdateProfile] = useModal(<UpdateProfile />);
  const [currentTab, setCurrentTab] = useState(TABS[0]);
  return (
    <div className="Profile page-layout">
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="UserInfo">
        <div className="heading">
          <div className="title">
            Thông tin tài khoản
            <Button variant="outline" className="edit-btn">
              <PenIcon
                width="16"
                height="16"
                style={{ cursor: 'pointer' }}
                onClick={showUpdateProfile}
              />
            </Button>
          </div>
          <div className="count">
            <span>0</span> chuyến
          </div>
        </div>
        <div className="user-info">
          <div className="user-avatar">
            <Img width="150px" />
            <div className="user-fullname">Hoàng Anh</div>
          </div>
          <div className="info-rows">
            <div className="group-row">
              <div className="info-row">
                <div className="label">Ngày sinh</div>
                <div className="value">--</div>
              </div>
              <div className="info-row">
                <div className="label">Giới tính</div>
                <div className="value">Nam</div>
              </div>
            </div>
            <div className="info-row">
              <div className="label">Số điện thoại</div>
              <div className="value">0975502334</div>
            </div>
            <div className="info-row">
              <div className="label">Email</div>
              <div className="value">anhvu.dev.103@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-dr" />
        <div className="grap_form_edit">
          <div className="close_button_grap">
            <div className="btn_cls">
              <i className="fa-regular fa-circle-xmark icon-cl cl_action" />
            </div>
          </div>
          <div className="login-text">Cập nhật thông tin</div>
          <div className="text_phone">Tên hiển thị</div>
          <div>
            <input className="input_css2" type="text" />
          </div>
          <div className="text_phone">Ngày sinh</div>
          <div>
            <input className="input_css2" type="text" />
          </div>
          <div className="text_phone">Giới tính</div>
          <div>
            <select
              className="form-select form-select-lg mb-3"
              aria-label="Large select example"
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <div className="text-center">
            <div className="btn_login">Cập nhập</div>
          </div>
        </div>
        <div className="phone_width">
          <div className="close_button_grap close_phone">
            <div className="btn_cls">
              <i className="fa-regular fa-circle-xmark icon-cl cl_action2" />
            </div>
          </div>
          <div className="login-text">Cập nhật thông tin</div>
          <div className="text_phone">Số hiện tại</div>
          <div>
            <input className="input_css2" type="text" />
          </div>
          <div className="text-center mt-3">
            <div className="btn_login">Cập nhập</div>
          </div>
        </div>
        <div className="mail_width">
          <div className="close_button_grap close_phone">
            <div className="btn_cls">
              <i className="fa-regular fa-circle-xmark icon-cl cl_action3" />
            </div>
          </div>
          <div className="login-text">Cập nhật thông tin</div>
          <div className="text_phone">Cập nhật email </div>
          <div>
            <input className="input_css2" type="text" />
          </div>
          <div className="text-center mt-3">
            <div className="btn_login">Cập nhập</div>
          </div>
        </div> */}
    </div>
  );
};

const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="Tab">
      <div className="heading">Xin chào bạn!</div>
      <div className="tabs">
        {TABS.map((tab) => {
          return (
            <div
              key={tab.title}
              className={`tab ${
                currentTab.title === tab.title ? 'selected_item' : ''
              }`}
              onClick={() => setCurrentTab(tab)}
            >
              <div className="icon">{tab.icon()}</div>
              <div className="title">{tab.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
