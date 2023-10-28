import React from 'react';
import { Link } from 'react-router-dom';

import { DiscordIcon, TelegramIcon } from '../Svg';

import logo from '../../assets/imgs/logo.png';

import './Footer.scss';
import { LINKS } from '../../constants/footer';

const Footer = () => {
  return (
    <div>
  <div className="mt-5" style={{padding: '10px 200px', borderTop: '1px solid #c6c6c6', borderBottom: '1px solid #c6c6c6'}}>
    <div className="row">
      <div className="col-sm-5 col-lg-4">
        <img className="rounded-circle" alt="140x140" style={{width: 300, height: 90}} src="https://localhost:44307/Image/Home/img11.png" data-holder-rendered="true" />
        <h6>Hotline: 19001008</h6>
        <p>Tổng đài hỗ trợ: 7AM-10PM</p>
        <br />
        <h6>Contact@addda.vn</h6>
        <p>Gửi mail cho ADDDA</p>		
      </div>
      <div className="col-sm-6 col-lg-3 mt-3">
        <h6 className='fw-bold'>Chính sách</h6>
        <br />
        <p>Chính sách và quy định</p>
        <p>Quy chế hoạt động</p>
        <p>Bảo mật thông tin</p>
        <p>Giải quyết tranh chấp</p>		  
      </div>
      <div className="col-sm-6 col-lg-2 mt-3">
        <h6 className='fw-bold'>Tìm hiểu thêm</h6>
        <br />
        <p>Hướng dẫn chung</p>
        <p>Hướng dẫn đặt xe</p>
        <p>Hướng dẫn thanh toán</p>
        <p>Hỏi và trả lời</p>	  
      </div>
      <div className="col-sm-6 col-lg-3">
        <br />
        <br />
        <p>Về ADDDA</p>
        <p>ADDDA Blog</p>
        <p>Tuyển dụng</p>  
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row mt-3">
      <div className="col-sm-6 col-lg-4">
        <h6>© Công ty Cổ Phần ADDDA Asia</h6>
      </div>
      <div className="col-sm-6 col-lg-3">
        <p>Số GCNĐKKD: 03173075121</p>
      </div>
      <div className="col-sm-6 col-lg-2">
        <p>Ngày cấp: 24-05-22</p>  
      </div>
      <div className="col-sm-6 col-lg-3">
        <p>Nơi cấp: Sở Kế hoạch và Đầu tư</p>  
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <img className="rounded-circle" alt="140x140" style={{width: 250, height: 70}} src="https://localhost:44307/Image/Home/img12.png" data-holder-rendered="true" />
      </div>
      <div className="col-sm-6 col-lg-3">
        <p>Phương thức thanh toán</p>
      </div>
      <div className="col-sm-6 col-lg-5">
        <img className="rounded-circle" alt="140x140" style={{width: 70, height: 60}} src="https://localhost:44307/Image/Home/img13.png" data-holder-rendered="true" />
        <img className="rounded-circle" alt="140x140" style={{width: 70, height: 60}} src="https://localhost:44307/Image/Home/img14.png" data-holder-rendered="true" />
        <img className="rounded-circle" alt="140x140" style={{width: 70, height: 60}} src="https://localhost:44307/Image/Home/img15.png" data-holder-rendered="true" />
        <img className="rounded-circle" alt="140x140" style={{width: 70, height: 60}} src="https://localhost:44307/Image/Home/img16.png" data-holder-rendered="true" />
        <img className="rounded-circle" alt="140x140" style={{width: 70, height: 60}} src="https://localhost:44307/Image/Home/img17.png" data-holder-rendered="true" />
      </div>
    </div>
  </div>
  {/* Show car  */}
</div>

  );
};

export default Footer;
