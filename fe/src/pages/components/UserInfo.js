import React from "react";

import Img from "../../components/Img";
import Button from "../../components/Button";
import { PenIcon } from "../../components/Svg";
import UpdateProfile from "../../components/modals/UpdateProfile";

import useModal from "../../hooks/useModal";

import "./styles/UserInfo.scss";

const UserInfo = () => {
  const [showUpdateProfile] = useModal(<UpdateProfile />);

  return (
    <div className="Tab-content UserInfo">
      <div className="heading">
        <div className="title">
          Thông tin tài khoản
          <Button variant="outline" className="edit-btn">
            <PenIcon
              width="16"
              height="16"
              style={{ cursor: "pointer" }}
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
  );
};

export default UserInfo;
