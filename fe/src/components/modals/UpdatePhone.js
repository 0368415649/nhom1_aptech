import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';
import useForm from '../../hooks/useForm';

import './styles/UpdateProfile.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

const rules = {
  phone: {
    required: 'Số điện thoại không được để trống',
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
    formState: { dirtyErrors, isError },
  } = useForm(rules);
  const [error, setError] = useState(null);
  const { user } = useUserContext();

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
        <Button size="lg" className="submit-btn" disabled={isError}>
          Cập nhật
        </Button>
      </form>
    </Modal>
  );
};

export default UpdatePhone;
