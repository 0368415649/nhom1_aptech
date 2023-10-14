import React, { Fragment, useState } from 'react';

import { ChevronRightIcon } from '../components/Svg';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

import './styles/RegisterCarForm.scss';
import UploadImage from '../components/UploadImage/UploadImage';

const options = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
];

const STEPS = [
  { label: 'Thông tin' },
  { label: 'Cho thuê' },
  { label: 'Hình ảnh' },
];

const RegisterCarForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const ShowedStep = [<StepOne />, <StepTwo />, <StepThree />][currentStep];

  const getNextButton = () => {
    const disabled = currentStep === STEPS.length - 1;
    return {
      disabled,
      onClick: () => !disabled && setCurrentStep((prev) => prev + 1),
    };
  };

  const getPrevButton = () => {
    const disabled = currentStep === 0;
    return {
      disabled,
      onClick: () => !disabled && setCurrentStep((prev) => prev - 1),
    };
  };

  return (
    <div className="RegisterCarForm page-layout">
      <div className="steps" onClick={() => setCurrentStep((prev) => prev + 1)}>
        {STEPS.map((step, index) => (
          <>
            <div className={`step ${currentStep === index ? 'actived' : ''}`}>
              <span>{index + 1}</span>
              {step.label}
            </div>
            {index !== STEPS.length - 1 && <ChevronRightIcon />}
          </>
        ))}
      </div>
      {ShowedStep}

      <div className="buttons">
        <Button size="lg" variant="outline" {...getPrevButton()}>
          Quay lại
        </Button>
        <Button size="lg" {...getNextButton()}>
          Kế tiếp
        </Button>
      </div>
    </div>
  );
};

const StepOne = () => {
  return (
    <Fragment>
      <div className="section">
        <div className="title">Biển số xe</div>
        <div className="warning">
          Lưu ý: Biển số xe khổng thể thay đổi sau khi đăng ký
        </div>
        <div className="half">
          <Input />
        </div>
        {/* {dirtyErrors["password"] && (
        <span className="invalid">{dirtyErrors["password"]}</span>
      )} */}
      </div>

      <div className="section">
        <div className="title">Thông số cơ bản</div>
        <div className="warning">
          Lưu ý: Lưu ý: Thông số cơ bản sẽ không thể thay đổi sau khi đăng ký
        </div>
        <div className="input-group">
          <div className="input-section">
            <div className="label">Hãng xe</div>
            <Dropdown
              options={options}
              // setOption={setValue}
              // {...register("gender")}
            />
          </div>
          <div className="input-section">
            <div className="label">Mẫu xe</div>
            <Dropdown
              options={options}
              // setOption={setValue}
              // {...register("gender")}
            />
          </div>
          <div className="input-section">
            <div className="label">Loại xe</div>
            <Dropdown
              options={options}
              // setOption={setValue}
              // {...register("gender")}
            />
          </div>
          <div className="input-section">
            <div className="label">Năm sản xuất</div>
            <Dropdown
              options={options}
              // setOption={setValue}
              // {...register("gender")}
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="title">Mô tả</div>
        <textarea rows={8} />
      </div>
    </Fragment>
  );
};

const StepTwo = () => {
  return (
    <div className="half">
      <div className="input-section">
        <div className="label">Giá cho thuê mặc định</div>
        <div className="info">Đơn giá theo ngày</div>
        <Input suffix="K" isNumberInput />
      </div>
    </div>
  );
};

const StepThree = () => {
  return (
    <div className="StepThree">
      <div className="section">
        <div className="title">Hình ảnh xe</div>
        <div className="car-images">
          <UploadImage />
          <UploadImage />
          <UploadImage />
          <UploadImage />
        </div>
      </div>
      <div className="section">
        <div className="title">Hình ảnh chứng minh xe</div>
        <div className="car-papers">
          <UploadImage />
          <UploadImage />
        </div>
      </div>
    </div>
  );
};
export default RegisterCarForm;
