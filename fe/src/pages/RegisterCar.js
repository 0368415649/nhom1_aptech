import React from 'react';

import Button from '../components/Button';
import VerifyIdentification from '../components/modals/VerifyIdentification';

import useModal from '../hooks/useModal';

import registerCar from '../assets/imgs/register_car.png';

import './styles/RegisterCar.scss';
import { useUserContext } from '../contexts/User';
import RegisterCarForm from './RegisterCarForm';

const RegisterCar = () => {
  const [showVerifyIdentification] = useModal(<VerifyIdentification />);
  const { user } = useUserContext();

  return user?.verify_flg === 2 ? (
    <>
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
    </>
  ) : (
    <RegisterCarForm />
  );
};

export default RegisterCar;
