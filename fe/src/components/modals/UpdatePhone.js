import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';
import useForm from '../../hooks/useForm';

import './styles/UpdateProfile.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';
import useModal from '../../hooks/useModal';
import VerifyOtp from './VerifyOtp';
import { PHONE_NUMBER } from '../../constants/regexs';

const rules = {
  phone: {
    required: 'Số điện thoại không được để trống',
    option: (value) => {
      if (PHONE_NUMBER.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Số điện thoại không hợp lệ',
  },
};

const options = [
  { label: 'Nam', value: 'nam' },
  { label: 'Nữ', value: 'nữ' },
];

const UpdatePhone = (props) => {
  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError, data },
  } = useForm(rules);
  const [error, setError] = useState(null);
  const { user } = useUserContext();
  const [showVerifyOtp, dismissVerifyOtp] = useModal(
    <VerifyOtp
      phoneNumber={data['phone']}
      onSuccess={() => submitUpdatePhone(data)}
    />
  );

  const submitUpdatePhone = async (formData) => {
    try {
      const { data } = await http.put('/change_phone', {
        phone: formData.phone,
        customer_id: user?.id || localStorage.getItem('USER_ID'),
      });
      if (data.status === 1) {
        setError(null);
        props.onDismiss();
        window.location.reload();
      } else {
        setError('Không thành công, thử lại sau!');
      }
    } catch (error) {
      setError('Không thành công, thử lại sau!');
    }
  };

  return (
    <Modal label="Cập nhật số điện thoại" {...props}>
      <form
        className="UpdateProfile"
        onSubmit={handleSubmit(submitUpdatePhone)}
      >
        <div className="input-section">
          <div className="label">Số điện thoại</div>
          <Input {...register('phone')} />
          {dirtyErrors['phone'] && (
            <span className="invalid">{dirtyErrors['phone']}</span>
          )}
        </div>
        {error && <div className="invalid">{error}</div>}
        <Button
          onClick={showVerifyOtp}
          size="lg"
          className="submit-btn"
          disabled={isError}
        >
          Cập nhật
        </Button>
      </form>
    </Modal>
  );
};

export default UpdatePhone;
