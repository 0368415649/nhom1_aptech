import React, { useState } from 'react';
import Modal from './Modal';
import Input from '../Input';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase/setup';
import Button from '../Button';

import './styles/VerifyOtp.scss';

const VerifyOtp = ({ phoneNumber, ...props }) => {
  const [otpConfirm, setOtpConfirm] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isSentSms, setIsSentSms] = useState(false);
  const [isSendingSms, setIsSendingSms] = useState(false);
  const [isConfirmingOtp, setIsConfirmingOtp] = useState(false);

  const submitOtp = () => {
    setIsSentSms(false);
    setIsSendingSms(true);

    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
      size: 'invisible',
    });

    const appVerifier = window.recaptchaVerifier;
    const formattedPhoneNumber =
      '+84' + phoneNumber.slice(1, phoneNumber.length);

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
    <Modal label="Xác minh số điện thoại" className="VerifyOtp" {...props}>
      <Input
        value={otpConfirm}
        onChange={(e) => setOtpConfirm(e.target.value)}
        placeholder="Nhập mã xác nhận gồm 6 số"
        button={<Button onClick={submitOtp}>Gửi mã</Button>}
        className="otp-confirm"
      />
      <Button className="verify-btn" onClick={confirmOtp}>
        Xác nhận
      </Button>
    </Modal>
  );
};

export default VerifyOtp;
