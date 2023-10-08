import React, { useState } from 'react';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { auth } from '../firebase/setup';
import Button from '../components/Button';
import Input from '../components/Input';

const OTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState('');

  const submit = () => {
    console.log('>> Check | submit:');

    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      size: 'invisible',
    });

    const appVerifier = window.recaptchaVerifier;
    const formattedPhoneNumber =
      '+84' + phoneNumber.slice(1, phoneNumber.length);

    signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log(
          '>> Check | window.confirmationResult:',
          window.confirmationResult
        );
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  const confirmOTP = () => {
    window.confirmationResult
      .confirm(confirm)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log('>> Check | user:', user);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <div style={{ marginTop: 300 }}>
      <div id="sign-in-button"></div>
      Số điện thoại:
      <Input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      <Button onClick={submit}>Gửi mã</Button>
      <Button onClick={confirmOTP}>Đăng nhập</Button>
    </div>
  );
};

export default OTP;
