import React, { useState } from "react";

import {
  ClockIcon,
  HeartIcon,
  LockIcon,
  LogoutIcon,
  UserIcon,
  VehicleIcon,
} from "../components/Svg";
import UserInfo from "./components/UserInfo";
import LeaseHistory from "./components/LeaseHistory";

import "./styles/Profile.scss";
import MyCar from "./components/MyCar";
import Favorite from "./components/Favorite";

const MY_ACCOUNT = "Tài khoản của tôi";
const FAVORITE = "Xe yêu thích";
const MY_CAR = "Xe của tôi";
const LEASE_HISTORY = "Lịch sử cho thuê xe";
const RENTAL_HISTORY = "Địa chỉ của tôi";
const CHANGE_PASSWORD = "Đổi mật khẩu";
const LOG_OUT = "Đăng xuất";

const TABS = [
  { icon: UserIcon, title: MY_ACCOUNT },
  { icon: HeartIcon, title: FAVORITE },
  { icon: VehicleIcon, title: MY_CAR },
  { icon: ClockIcon, title: LEASE_HISTORY },
  { icon: ClockIcon, title: RENTAL_HISTORY },
  { icon: LockIcon, title: CHANGE_PASSWORD },
  { icon: LogoutIcon, title: LOG_OUT },
];

const Profile = () => {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const ShowedTab = {
    [MY_ACCOUNT]: <UserInfo />,
    [FAVORITE]: <Favorite />,
    [MY_CAR]: <MyCar />,
    [LEASE_HISTORY]: <LeaseHistory />,
    [RENTAL_HISTORY]: <LeaseHistory />,
    [CHANGE_PASSWORD]: <UserInfo />,
    [LOG_OUT]: <UserInfo />,
  }[currentTab.title];

  return (
    <div className="Profile page-layout">
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {ShowedTab}
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
                currentTab.title === tab.title ? "selected_item" : ""
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
