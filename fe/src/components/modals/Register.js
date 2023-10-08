import React, { useState } from 'react';

import Modal from './Modal';
import Input, { Checkbox } from '../Input';
import Button from '../Button';
import useValidate from '../../hooks/useValidate';
import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from '../../contants/regexs';
import useCheckbox from '../../hooks/useCheckbox';

import './styles/Register.scss';
import useForm from '../../hooks/useForm';
import { RecaptchaVerifier, signInWithPhoneNumber } from '@firebase/auth';
import { auth } from '../../firebase/setup';

const rules = {
  phone: {
    required: 'Số điện thoại không được để trống',
    option: (value) => {
      if (PHONE_NUMBER_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Số điện thoại không hợp lệ',
  },
  displayName: {
    required: 'Tên hiển thị không được để trống',
  },
  password: {
    required: 'Mật khẩu không được để trống',
    option: (value) => {
      if (PASSWORD_REGEX.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Mật khẩu yếu, vui lòng thử mật khẩu khác',
  },
  confirmPassword: {
    required: 'Mật khẩu không được để trống',
    option: (value, form) => {
      if (form.password === value) {
        return true;
      }
      return false;
    },
    errorMsg: 'Mật khẩu không khớp',
  },
};

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, errors, isError, data },
  } = useForm(rules);
  const [otpConfirm, setOtpConfirm] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isSentSMS, setIsSentSMS] = useState(false);

  const { isChecked, Checkbox } = useCheckbox(
    'Tôi đồng ý với chính sách của ADDDA'
  );

  const submitRegister = console.log;

  const isDisabled = !isChecked || isError;

  const submit = () => {
    const phoneNumber = data['phone'];
    setIsSentSMS(false);

    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      size: 'invisible',
    });

    const appVerifier = window.recaptchaVerifier;
    const formattedPhoneNumber =
      '+84' + phoneNumber.slice(1, phoneNumber.length);

    signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        setIsSentSMS(true);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  const confirmOTP = () => {
    window.confirmationResult
      .confirm(otpConfirm)
      .then((result) => {
        // User signed in successfully.
        setIsOtpValid(!!result.user);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <Modal label="Đăng ký" {...props}>
      <form className="Register" onSubmit={handleSubmit(submitRegister)}>
        <div className="input-section">
          <div className="label">Số điện thoại</div>
          <Input {...register('phone')} />
          {dirtyErrors['phone'] && (
            <span className="invalid">{dirtyErrors['phone']}</span>
          )}
          {data['phone'] && !errors['phone'] && (
            <Input
              value={otpConfirm}
              setValue={(e) => setOtpConfirm(e.target.value)}
              placeholder="Nhập mã xác nhận gồm 6 số"
              button={<Button onClick={submit}>Gửi mã</Button>}
              className="otp-confirm"
            />
          )}
        </div>
        <div className="input-section">
          <div className="label">Tên hiển thị</div>
          <Input {...register('displayName')} />
          {dirtyErrors['displayName'] && (
            <span className="invalid">{dirtyErrors['displayName']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Mật khẩu</div>
          <Input {...register('password')} />
          {dirtyErrors['password'] && (
            <span className="invalid">{dirtyErrors['password']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Nhập lại mật khẩu</div>
          <Input {...register('confirmPassword')} />
          {dirtyErrors['confirmPassword'] && (
            <span className="invalid">{dirtyErrors['confirmPassword']}</span>
          )}
        </div>
        <Checkbox className="policy" />
        <Button disabled={isDisabled}>Đăng ký</Button>
      </form>
    </Modal>
  );
};

export default Register;
