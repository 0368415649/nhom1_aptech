import React from 'react';

import porsche from '../../assets/imgs/poscher.jpg';
import avatar from '../../assets/imgs/luffy.jpg';

import './styles/Cars.scss';

const Cars = () => {
  return (
    <div className="row contai-grap">
      {Array(12)
        .fill(null)
        .map((i, k) => {
          return (
            <div className="col-3 mt-3 grap_car_big">
              <div className="grap-car_pro">
                <div className="text-center position-relative">
                  <a href>
                    <img
                      className="cu_point"
                      src={porsche}
                      width="100%"
                      height="170px"
                      alt
                    />
                  </a>
                  <div className="logo_pro_ne">
                    <a href>
                      <img src={avatar} width="50px" alt />
                    </a>
                  </div>
                </div>
                <div className="car_pro_name mt-4">AUGMENTED REALITY</div>
                <div className="car_pro_name_address mt-3">
                  <i className="fa-solid fa-location-dot" />
                  Japan-fukuoka-kitakyushushi
                </div>
                <div className="car_pro_name_sen" />
                <div className="car_pro_name_rate d-flex justify-content-between">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-star rate_color" />
                      <div className="ms-1">5.0</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ms-2">
                      <i
                        className="fa-solid fa-suitcase"
                        style={{ color: '#24944b' }}
                      />
                      <div className="ms-1">194 chuyến</div>
                    </div>
                  </div>
                  <div className>
                    Giá : <span className="prire_color_ne">278K</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cars;
