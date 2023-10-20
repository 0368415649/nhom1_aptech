import React from "react";

import porsche from "../../assets/imgs/poscher.jpg";

const MyCar = () => {
  return (
    <div className="Tab-content MyCar col-xl-9 ">
      <div className="grap-tttc ">
        <div className="d-flex justify-content-between grap_sen_car">
          <div className="text-tttc">Danh sách xe</div>
          <div className=" d-flex align-items-center">
            <a className="btn_add_car" href="./resignter_car_page.html">
              Đăng ký cho thuê xe
            </a>
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
        <div className="row grap_car_pro">
          <div className="col-5">
            <img
              className="car_img_css"
              src={porsche}
              width="100%"
              height="200px"
              alt
            />
          </div>
          <div className="col-4 ">
            <div className="item-car_name mt-2">Porsche Unveils Two Models</div>
            <div className="item-car_status mt-2">chưa có chuyến</div>
            <div className="item_car_price mt-2">Giá : 1600k</div>
            <div className="car_pro_name_rate d-flex justify-content-between mt-2">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-star rate_color" />
                  <div className="ms-1">5.0</div>
                </div>
                <div className="d-flex justify-content-center align-items-center ms-2">
                  <i
                    className="fa-solid fa-suitcase"
                    style={{ color: "#24944b" }}
                  />
                  <div className="ms-1">194 chuyến</div>
                </div>
              </div>
            </div>
            <div className="item-car_address mt-3">
              <i className="fa-solid fa-location-dot" />
              Japan-fukuoka-kitakyushushi
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <a className="btn_add_car mb-2" href>
                Quản lý xe
              </a>
              <div>
                <button className="mt-3 btn-delete_car">Xóa xe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCar;
