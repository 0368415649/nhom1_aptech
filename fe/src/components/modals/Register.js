import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';
import Input, { Checkbox } from '../Input';
import Button from '../Button';
import useValidate from '../../hooks/useValidate';
import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from '../../contants/regexs';

const rules = {
  phone: {
    notEmpty: 'Số điện thoại không được để trống',
    options: (value) => {
      if (PHONE_NUMBER_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Số điện thoại không hợp lệ',
  },
  displayName: {
    notEmpty: 'Tên hiển thị không được để trống',
  },
  password: {
    notEmpty: 'Mật khẩu không được để trống',
    options: (value) => {
      if (PASSWORD_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Mật khẩu không hợp lệ',
  },
  confirmPassword: {
    notEmpty: 'Mật khẩu không được để trống',
    options: (value, form) => {
      if (form.password.value === value) {
        return true;
      }
      return false;
    },
    errorMsg: 'Mật khẩu không khớp',
  },
};

const DEFAULT_FORM_VALUES = {
  phone: {
    label: 'Số điện thoại',
    value: '',
  },
  displayName: {
    label: 'Tên hiển thị',
    value: '',
  },
  password: {
    label: 'Mật khẩu',
    type: 'password',
    value: '',
  },
  confirmPassword: {
    label: 'Nhập lại mật khẩu',
    type: 'password',
    value: '',
  },
};

const Register = (props) => {
  const [form, setForm] = useState(DEFAULT_FORM_VALUES);

  const handleChange = (e) => {
    setForm((prev) => {
      const _prev = prev[e.target.name];
      return {
        ...prev,
        [e.target.name]: {
          ..._prev,
          value: e.target.value,
        },
      };
    });
  };

  const formInputs = useValidate(form, rules);

  return (
    <Modal label="Đăng ký" {...props}>
      <BaseRegsiter>
        {Object.keys(formInputs).map((field) => {
          const { label, value, type = 'text', errorMsg } = formInputs[field];
          return (
            <Input
              label={label || field}
              name={field}
              value={value}
              type={type}
              onChange={handleChange}
              error={errorMsg}
            />
          );
        })}
        <Checkbox label="Tôi đồng ý với chính sách của ADDDA" />
        <LoginButton>Đăng ký</LoginButton>
      </BaseRegsiter>
    </Modal>
  );
};

const LoginButton = styled(Button)`
  width: 100%;
`;

const BaseRegsiter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;

  .switch {
    color: #39b062;
    text-decoration: none;
    cursor: pointer;
  }

  .forgot-password {
    color: #39b062;
    font-weight: 500;
    text-align: right;
    cursor: pointer;
    margin: 8px 0;
  }
`;

export default Register;
