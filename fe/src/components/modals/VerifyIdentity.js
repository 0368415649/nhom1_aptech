import React, { useState } from "react";

import Modal from "./Modal";
import Button from "../Button";

import "./styles/VerifyIdentityModal.scss";
import useForm from "../../hooks/useForm";
import { CITIZEN_IDENTIFICATION_NUMBER } from "../../constants/regexs";
import Input from "../Input";

const rules = {
  citizenIdentificationNumber: {
    required: "Số CCCD không được để trống",
    option: (value) => {
      if (CITIZEN_IDENTIFICATION_NUMBER.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: "Số CCCD không hợp lệ",
  },
  fullName: {
    required: "Họ và tên không được để trống",
  },
  dateOfBirth: {
    required: "Ngày sinh không được để trống",
  },
};

const VerifyIdentity = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError },
  } = useForm(rules);

  const submitVerifyIndentity = console.log;

  return (
    <Modal
      className="VerifyIdentityModal"
      label="Xác minh danh tính"
      {...props}
    >
      {!isConfirmed && (
        <div className="confirm-action">
          <div className="title">Bạn cần xác minh danh tính để đăng ký xe</div>
          <Button onClick={() => setIsConfirmed(true)}>
            Tiến hành xác minh
          </Button>
        </div>
      )}

      {isConfirmed && (
        <form className="Login" onSubmit={handleSubmit(submitVerifyIndentity)}>
          <div className="input-section">
            <div className="label">Số CCCD</div>
            <Input {...register("citizenIdentificationNumber")} />
            {dirtyErrors["citizenIdentificationNumber"] && (
              <span className="invalid">
                {dirtyErrors["citizenIdentificationNumber"]}
              </span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Họ và tên</div>
            <Input {...register("fullName")} />
            {dirtyErrors["fullName"] && (
              <span className="invalid">{dirtyErrors["fullName"]}</span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Ngày sinh</div>
            <Input type="date" {...register("dateOfBirth")} />
            {dirtyErrors["dateOfBirth"] && (
              <span className="invalid">{dirtyErrors["dateOfBirth"]}</span>
            )}
          </div>
          <Button className="verify-btn" disabled={isError}>
            Xác minh
          </Button>
        </form>
      )}
    </Modal>
  );
};

export default VerifyIdentity;
