import React, { useState } from "react";

import Modal from "./Modal";
import Input from "../Input";
import useValidate from "../../hooks/useValidate";
import Button from "../Button";
import Dropdown from "../Dropdown";

import "./styles/UpdateProfile.scss";

const rules = {
  displayName: {
    notEmpty: "Tên hiển thị không được để trống",
  },
  dayOfBirth: {},
};

const DEFAULT_FORM_VALUES = {
  displayName: {
    label: "Tên hiển thị",
    value: "",
  },
  dayOfBirth: {
    label: "Ngày sinh",
    value: "",
  },
};

const UpdateProfile = (props) => {
  const [form, setForm] = useState(DEFAULT_FORM_VALUES);
  const [gender, setGender] = useState();

  const options = [{ label: "Nam" }, { label: "Nữ" }];

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
    <Modal className="UpdateProfile" label="Cập nhật thông tin" {...props}>
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
        <Dropdown options={options} option={gender} setOption={setGender} />
        <Button className="full" onClick={handleLogin} disabled={isInvalid}>
          Cập nhật
        </Button>
      </div>
    </Modal>
  );
};

export default UpdateProfile;
