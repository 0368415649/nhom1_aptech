import React from 'react';

import Button from '../components/Button';
import VerifyIdentification from '../components/modals/VerifyIdentification';

import useModal from '../hooks/useModal';

import registerCar from '../assets/imgs/register_car.png';

import './styles/RegisterCar.scss';

const RegisterCar = () => {
  const [showVerifyIdentification] = useModal(<VerifyIdentification />);

  return (
    <div className="RegisterCar page-layout">
      <div className="title">Đăng ký xe</div>
      <img src={registerCar} alt="registerCar" />
      <Button
        size="lg"
        className="register-car-btn"
        onClick={showVerifyIdentification}
      >
        Đăng ký xe cho thuê
      </Button>
    </div>
  );
};

export default RegisterCar;
