import React from "react";

import porsche from "../../assets/imgs/poscher.jpg";

import "./styles/LeaseHistory.scss";

const LeaseHistory = () => {
  return (
    <div className="Tab-content LeaseHistory">
      <div className="grap-tttc ">
        <div className="d-flex justify-content-between grap_sen_car2">
          <div className="text-tttc">Lịch sử cho thuê</div>
        </div>
        <div className="row grap_history_all">
          <div className="col-2 text-center grap_history">
            <div className="click_staus status_commonn">Tất cả</div>
          </div>
          <div className="col-2 text-center grap_history">
            <div className=" status_commonn">Chờ xác nhận</div>
          </div>
          <div className="col-2 text-center grap_history">
            <div className=" status_commonn">Chờ giao xe</div>
          </div>
          <div className="col-2 text-center grap_history">
            <div className=" status_commonn">Đang thuê xe</div>
          </div>
          <div className="col-2 text-center grap_history">
            <div className=" status_commonn">Đã hoàn thành</div>
          </div>
          <div className="col-2 text-center grap_history">
            <div className=" status_commonn">Đã bị hủy</div>
          </div>
        </div>
        {/* No car  */}
        {/* 
              <div class="row mt-5">
                  <div class="d-flex justify-content-center">
                      <img src="../img/no_car.png" width="300px" alt="">
                  </div>
                  <div class="d-flex justify-content-center">
                      <div class="no_car_txt">Không tìm thấy xe nào !</div>
                  </div>
              </div> */}
        {/* No car  */}
        <div className="mt-5" />
        <div className="row grap_car_pro mt-3">
          <div className="col-5">
            <a href="./home_show_car.html">
              <img
                className="car_img_css"
                src={porsche}
                width="100%"
                height="200px"
                alt
              />
            </a>
          </div>
          <div className="col-7 ">
            <div className="item-car_name mt-2">Porsche Unveils Two Models</div>
            <div className="mt-2 car_pro_name_rate">
              Ngày start : 10/10/2023 - 09:00
            </div>
            <div className="mt-2 car_pro_name_rate">
              Ngày end : 10/11/2023 - 09:00
            </div>
            <div className="item_car_price mt-2">
              Tổng số tiền :{" "}
              <span style={{ color: "#25c55d", fontWeight: 500 }}>2202k</span>
            </div>
            <div className="item-car_address mt-2">
              <i className="fa-solid fa-location-dot" />
              Japan-fukuoka-kitakyushushi
            </div>
            <div className="mt-2 car_pro_name_rate fw-bold">
              Trạng thái: chờ xác nhận
            </div>
            <div className="grap_sen_his" />
            <div className="text-center d-flex align-items-center">
              <a className="btn_add_car mb-2" href>
                Xác nhận
              </a>
            </div>
          </div>
        </div>
        <div className="row grap_car_pro mt-3">
          <div className="col-5">
            <a href="./home_show_car.html">
              <img
                className="car_img_css"
                src={porsche}
                width="100%"
                height="200px"
                alt
              />
            </a>
          </div>
          <div className="col-7 ">
            <div className="item-car_name mt-2">Porsche Unveils Two Models</div>
            <div className="mt-2 car_pro_name_rate">
              Ngày start : 10/10/2023 - 09:00
            </div>
            <div className="mt-2 car_pro_name_rate">
              Ngày end : 10/11/2023 - 09:00
            </div>
            <div className="item_car_price mt-2">
              Tổng số tiền :{" "}
              <span style={{ color: "#25c55d", fontWeight: 500 }}>2202k</span>
            </div>
            <div className="item-car_address mt-2">
              <i className="fa-solid fa-location-dot" />
              Japan-fukuoka-kitakyushushi
            </div>
            <div className="mt-2 car_pro_name_rate fw-bold">
              Trạng thái: chờ giao xe
            </div>
            <div className="grap_sen_his" />
            <div className="text-center d-flex align-items-center">
              <a className="btn_add_car mb-2" href>
                Đã giao
              </a>
            </div>
          </div>
        </div>
        <div className="row grap_car_pro mt-3">
          <div className="col-5">
            <a href="./home_show_car.html">
              <img
                className="car_img_css"
                src={porsche}
                width="100%"
                height="200px"
                alt
              />
            </a>
          </div>
          <div className="col-7 ">
            <div className="item-car_name mt-2">Porsche Unveils Two Models</div>
            <div className="mt-2 car_pro_name_rate">
              Ngày start : 10/10/2023 - 09:00
            </div>
            <div className="mt-2 car_pro_name_rate">
              Ngày end : 10/11/2023 - 09:00
            </div>
            <div className="item_car_price mt-2">
              Tổng số tiền :{" "}
              <span style={{ color: "#25c55d", fontWeight: 500 }}>2202k</span>
            </div>
            <div className="item-car_address mt-2">
              <i className="fa-solid fa-location-dot" />
              Japan-fukuoka-kitakyushushi
            </div>
            <div className="mt-2 car_pro_name_rate fw-bold">
              Trạng thái: đang thuê xe
            </div>
            <div className="grap_sen_his" />
            <div className="text-center d-flex align-items-center">
              <a className="btn_add_car mb-2" href>
                Hoàn thành
              </a>
            </div>
          </div>
        </div>
        <div className="row grap_car_pro mt-3">
          <div className="col-5">
            <a href="./home_show_car.html">
              <img
                className="car_img_css"
                src={porsche}
                width="100%"
                height="200px"
                alt
              />
            </a>
          </div>
          <div className="col-7 ">
            <div className="item-car_name mt-2">Porsche Unveils Two Models</div>
            <div className="mt-2 car_pro_name_rate">
              Ngày start : 10/10/2023 - 09:00
            </div>
            <div className="mt-2 car_pro_name_rate">
              Ngày end : 10/11/2023 - 09:00
            </div>
            <div className="item_car_price mt-2">
              Tổng số tiền :{" "}
              <span style={{ color: "#25c55d", fontWeight: 500 }}>2202k</span>
            </div>
            <div className="item-car_address mt-2">
              <i className="fa-solid fa-location-dot" />
              Japan-fukuoka-kitakyushushi
            </div>
            <div className="mt-2 car_pro_name_rate fw-bold">
              Trạng thái: đã hoàn thành
            </div>
            <div className="grap_sen_his" />
          </div>
        </div>
        <div className="row grap_car_pro mt-3">
          <div className="col-5">
            <a href="./home_show_car.html">
              <img
                className="car_img_css"
                src={porsche}
                width="100%"
                height="200px"
                alt
              />
            </a>
          </div>
          <div className="col-7 ">
            <div className="item-car_name mt-2">Porsche Unveils Two Models</div>
            <div className="mt-2 car_pro_name_rate">
              Ngày start : 10/10/2023 - 09:00
            </div>
            <div className="mt-2 car_pro_name_rate">
              Ngày end : 10/11/2023 - 09:00
            </div>
            <div className="item_car_price mt-2">
              Tổng số tiền :{" "}
              <span style={{ color: "#25c55d", fontWeight: 500 }}>2202k</span>
            </div>
            <div className="item-car_address mt-2">
              <i className="fa-solid fa-location-dot" />
              Japan-fukuoka-kitakyushushi
            </div>
            <div className="mt-2 car_pro_name_rate fw-bold">
              Trạng thái: đã hủy
            </div>
            <div className="grap_sen_his" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaseHistory;
