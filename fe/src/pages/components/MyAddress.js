import React from 'react';

import './styles/LeaseHistory.scss';
const MyAddress = () => {
  return <div className="MyAddress">
    {/* CODE HERE */}

    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-6 col-sm-12">
          <h3>Địa chỉ đã lưu</h3>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="button-add">
            <button type="submit" id="submitButton" onclick="validateSignupForm()" className="submitButton">Thêm địa chỉ mới</button>
          </div>
        </div>
      </div>
    </div>
		
    <div className="grap_ic_left1 d-flex align-items-center justify-content-between mt-3">
        <div className="ms-3">Thanh Xuân, Hà Nội</div>
        <div className='mx-3'>edit</div>
    </div>

    <div className="col-lg-12 col-md-6 col-sm-12 text-center">
      <img className alt="140x140" style={{height: 400, borderRadius: 10}} src="https://localhost:44307/Image/Home/Untitled.png" data-holder-rendered="true" />
    </div>

    </div>;
};

export default MyAddress;
