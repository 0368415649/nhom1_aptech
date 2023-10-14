import React, { useState } from 'react';

import { ChevronRightIcon } from '../components/Svg';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

import './styles/RegisterCarForm.scss';

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
        <Button
          size="lg"
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Quay lại
        </Button>
        <Button size="lg" onClick={() => setCurrentStep((prev) => prev + 1)}>
          Kế tiếp
        </Button>
      </div>
    </div>
  );
};

const StepOne = () => {
  return (
    <div>
      <div className="section">
        <div className="input-section">
          <div className="label">Biển số xe</div>
          <div className="invalid">
            Lưu ý: Biển số xe khổng thể thay đổi sau khi đăng ký
          </div>
          <Input />
          {/* {dirtyErrors["password"] && (
        <span className="invalid">{dirtyErrors["password"]}</span>
      )} */}
        </div>
      </div>

      <div className="section">
        <div className="title">Thông số cơ bản</div>
        <div className="invalid">
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
          <div className="input-section">
            <div className="label">Truyền động</div>
            <Dropdown
              options={options}
              // setOption={setValue}
              // {...register("gender")}
            />
          </div>
          <div className="input-section">
            <div className="label">Loại nhiên liệu</div>
            <Dropdown
              options={options}
              // setOption={setValue}
              // {...register("gender")}
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="title">Mức tiêu thụ nguyên liệu</div>
        <div className="invalid">Số lít trên quãng đường 100 km</div>
        <Input />
      </div>

      <div className="section">
        <div className="title">Mô tả</div>
        <textarea rows={4} />
      </div>
    </div>
  );
};

const StepTwo = () => {
  return (
    <div>
      <div className="input-section">
        <div className="label">Mật khẩu</div>
        <Input />
        {/* {dirtyErrors["password"] && (
            <span className="invalid">{dirtyErrors["password"]}</span>
          )} */}
      </div>
    </div>
  );
};

const StepThree = () => {
  return <div>Step Three</div>;
};

export default RegisterCarForm;
