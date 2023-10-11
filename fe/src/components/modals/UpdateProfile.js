import React, { useState } from "react";

import Modal from "./Modal";
import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";
import useForm from "../../hooks/useForm";

import "./styles/UpdateProfile.scss";

const rules = {
  displayName: {
    required: "Tên hiển thị không được để trống",
  },
  gender: {
    required: "Giới tính không được để trống",
  },
};

const options = [
  { label: "Nam", value: "male" },
  { label: "Nữ", value: "female" },
];

const UpdateProfile = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { dirtyErrors, isError, errors },
  } = useForm(rules);

  const submitUpdateProfile = console.log;

  return (
    <Modal label="Cập nhật thông tin" {...props}>
      <form
        className="UpdateProfile"
        onSubmit={handleSubmit(submitUpdateProfile)}
      >
        <div className="input-section">
          <div className="label">Tên hiển thị</div>
          <Input {...register("displayName")} />
          {dirtyErrors["displayName"] && (
            <span className="invalid">{dirtyErrors["displayName"]}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Ngày sinh</div>
          <Input type="date" {...register("dateOfBirth")} />
          {dirtyErrors["dateOfBirth"] && (
            <span className="invalid">{dirtyErrors["dateOfBirth"]}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Giới tính</div>
          <Dropdown
            options={options}
            setOption={setValue}
            {...register("gender")}
          />
          {dirtyErrors["gender"] && (
            <span className="invalid">{dirtyErrors["gender"]}</span>
          )}
        </div>

        <Button className="submit-btn" disabled={isError}>
          Cập nhật
        </Button>
      </form>
    </Modal>
  );
};

export default UpdateProfile;
