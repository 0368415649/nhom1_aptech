import React, { useState } from "react";

import Modal from "./Modal";
import Input, { Checkbox } from "../Input";
import Button from "../Button";
import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from "../../contants/regexs";
import useCheckbox from "../../hooks/useCheckbox";

import "./styles/Register.scss";
import useForm from "../../hooks/useForm";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import { auth } from "../../firebase/setup";

const rules = {
  phone: {
    required: "Số điện thoại không được để trống",
    option: (value) => {
      if (PHONE_NUMBER_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: "Số điện thoại không hợp lệ",
  },
  displayName: {
    required: "Tên hiển thị không được để trống",
  },
  password: {
    required: "Mật khẩu không được để trống",
    option: (value) => {
      if (PASSWORD_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: "Mật khẩu yếu, vui lòng thử mật khẩu khác",
  },
  confirmPassword: {
    required: "Mật khẩu không được để trống",
    option: (value, form) => {
      if (form.password === value) {
        return true;
      }
      return false;
    },
    errorMsg: "Mật khẩu không khớp",
  },
};

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, errors, isError, data },
  } = useForm(rules);
  const [otpConfirm, setOtpConfirm] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isSentSms, setIsSentSms] = useState(false);
  const [isSendingSms, setIsSendingSms] = useState(false);
  const [isConfirmingOtp, setIsConfirmingOtp] = useState(false);

  const { isChecked, Checkbox } = useCheckbox(
    "Tôi đồng ý với chính sách của ADDDA"
  );

  const submitRegister = console.log;

  const isDisabled = !isChecked || isError || !isOtpValid;

  const submitOtp = () => {
    const phoneNumber = data["phone"];
    setIsSentSms(false);
    setIsSendingSms(true);

    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
    });

    const appVerifier = window.recaptchaVerifier;
    const formattedPhoneNumber =
      "+84" + phoneNumber.slice(1, phoneNumber.length);

    signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        setIsSentSms(true);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch(console.error)
      .finally(() => setIsSendingSms(false));
  };

  const confirmOtp = () => {
    setIsConfirmingOtp(true);
    window.confirmationResult
      .confirm(otpConfirm)
      .then((result) => {
        // User signed in successfully.
        setIsOtpValid(!!result.user);
        // ...
      })
      .catch(console.error)
      .finally(() => setIsConfirmingOtp(false));
  };

  return (
    <Modal label="Đăng ký" {...props}>
      <form className="Register" onSubmit={handleSubmit(submitRegister)}>
        <div className="input-section">
          <div className="label">Số điện thoại</div>
          <Input {...register("phone")} />
          {dirtyErrors["phone"] && (
            <span className="invalid">{dirtyErrors["phone"]}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Tên hiển thị</div>
          <Input {...register("displayName")} />
          {dirtyErrors["displayName"] && (
            <span className="invalid">{dirtyErrors["displayName"]}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Mật khẩu</div>
          <Input {...register("password")} isPasswordInput />
          {dirtyErrors["password"] && (
            <span className="invalid">{dirtyErrors["password"]}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Nhập lại mật khẩu</div>
          <Input {...register("confirmPassword")} isPasswordInput />
          {dirtyErrors["confirmPassword"] && (
            <span className="invalid">{dirtyErrors["confirmPassword"]}</span>
          )}
        </div>
        <Checkbox className="policy" />
        {data["phone"] && !errors["phone"] && (
          <div>
            <div className="divider" />
            <Input
              value={otpConfirm}
              onChange={(e) => setOtpConfirm(e.target.value)}
              placeholder="Nhập mã xác nhận gồm 6 số"
              button={
                isSentSms ? (
                  <Button onClick={confirmOtp}>Xác nhận</Button>
                ) : (
                  <Button
                    loading={[isSendingSms, "Đang gửi..."]}
                    onClick={submitOtp}
                  >
                    Gửi mã
                  </Button>
                )
              }
              className="otp-confirm"
            />
          </div>
        )}
        <Button className="register-btn" disabled={isDisabled}>
          Đăng ký
        </Button>
      </form>
    </Modal>
  );
};

export default Register;
