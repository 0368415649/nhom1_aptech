import React, { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";
import Input from "../Input";
import Button from "../Button";
import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from "../../contants/regexs";
import useValidate from "../../hooks/useValidate";

const rules = {
  phone: {
    notEmpty: "Số điện thoại không được để trống",
    options: (value) => {
      if (PHONE_NUMBER_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: "Số điện thoại không hợp lệ",
  },
  password: {
    notEmpty: "Mật khẩu không được để trống",
  },
};

const DEFAULT_FORM_VALUES = {
  phone: {
    label: "Số điện thoại",
    value: "",
  },
  password: {
    label: "Mật khẩu",
    type: "password",
    value: "",
  },
};

const Login = (props) => {
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

  const { formInputs, isInvalid } = useValidate(form, rules);

  const handleLogin = () => {};

  return (
    <Modal label="Đăng nhập" {...props}>
      <BaseLogin>
        <div className="forms">
          {Object.keys(formInputs).map((field) => {
            const { label, value, type = "text", errorMsg } = formInputs[field];
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
        </div>
        <div className="forgot-password">Quên mật khẩu</div>
        <LoginButton onClick={handleLogin} disabled={isInvalid}>
          Đăng nhập
        </LoginButton>
        <div class="text-center">
          <div class="text_r">
            Bạn chưa là thành viên? <div className="switch">Đăng ký ngay</div>
          </div>
        </div>
      </BaseLogin>
    </Modal>
  );
};

const LoginButton = styled(Button)`
  width: 100%;
`;

const BaseLogin = styled.div`
  .forms {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }

  .text_r {
    font-size: 14px;
    margin-top: 20px;
  }

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
    margin: 12px 0;
  }
`;

export default Login;
