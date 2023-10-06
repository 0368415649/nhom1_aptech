import React, { useState } from 'react';

import './styles/Profile.scss';
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
    <div className="Profile">
      <div className="grap-pr">
        <div className="row d-flex justify-content-between">
          <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <div className="col-xl-9 ">
            <div className="grap-tttc">
              <div className="d-flex justify-content-between">
                <div className="text-tttc d-flex align-items-center gap-3">
                  Thông tin tài khoản
                  <PenIcon
                    width="20"
                    height="20"
                    style={{ cursor: 'pointer' }}
                    onClick={showUpdateProfile}
                  />
                </div>
                <div className="grap-dl d-flex align-items-center">
                  <div className="dl-text ">
                    <i
                      className="fa-solid fa-suitcase-rolling"
                      style={{ color: '#00bd42' }}
                    />
                    <span>0</span>
                  </div>
                  <div className="ch-text">chuyến</div>
                </div>
              </div>
              <div className="row">
                <div className="col-4 text-center">
                  <div className>
                    <Img width="150px" />
                  </div>
                  <div className="ha-css">
                    <div>Hoàng Anh</div>
                  </div>
                </div>
                <div className="col-8 mt-4">
                  <div className>
                    <div className="grap-ns">
                      <div className="d-flex justify-content-between mt-2">
                        <div className="ns-text">Ngày sinh</div>
                        <div className="ns-text-ns">--/--/----</div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="ns-text">Giới tính</div>
                        <div className="ns-text-ns">Nam</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="d-flex justify-content-between mt-2">
                      <div className="ns-text">Số điện thoại</div>
                      <div className="ns-text-ns">
                        +84368415649
                        <i className="fa-solid fa-pen ms-2 ic-action-ep" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <div className="ns-text">Email</div>
                      <div className="ns-text-ns">
                        Thêm email{'{'}' '{'}'}
                        <i className="fa-solid fa-pen ms-2 ic-action-em" />
                      </div>
                    </div>
                    <div />
                  </div>
                </div>
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
    </div>
  );
};

const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="col-xl-3">
      <div className="text-tttc2">Xin chào bạn!</div>
      {TABS.map((tab) => {
        return (
          <div
            key={tab.title}
            className="grap_ic_left d-flex align-items-center mt-3"
          >
            <div
              className={`${
                currentTab.title === tab.title ? 'selected_item' : ''
              } gp_22 d-flex align-items-center`}
              onClick={() => setCurrentTab(tab)}
            >
              <div className="grap_all_ic">{tab.icon()}</div>
              <div className="ms-3 ">{tab.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
