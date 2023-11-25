import React, { Fragment, useEffect, useState } from 'react';

import { ChevronRightIcon } from '../components/Svg';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

import './styles/RegisterCarForm.scss';
import UploadImage from '../components/UploadImage/UploadImage';
import useForm from '../hooks/useForm';
import http from '../utils/http';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../contexts/User';
import { IMAGES_URL } from '../configs/urls';
import useScrollToTop from '../hooks/useScrollToTop';

const options = [
  { label: 'Nam', value: 'nam' },
  { label: 'Nữ', value: 'nữ' },
];

const STEPS = [
  { label: 'Thông tin' },
  { label: 'Hình ảnh xe' },
  { label: 'Giấy tờ đăng ký' },
];

const rules = {
  description: {
    required: 'Mô tả không được để trống',
  },
  price: {
    required: 'Giá không được để trống',
  },
  address: {
    required: 'Địa chỉ không được để trống',
  },
};

const RegisterCarFormEdit = () => {
  const { id } = useParams();
  const { user } = useUserContext();

  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await http.get('/get_details_car', {
          params: {
            id,
            customer_id: user?.id || localStorage.getItem('USER_ID'),
          },
        });
        setCar(data[0]);
      } catch (error) {
        console.log('>> Check | error:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id, user]);

  const [currentStep, setCurrentStep] = useState(0);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [types, setTypes] = useState([]);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [img5, setImg5] = useState(null);
  const [img6, setImg6] = useState(null);

  useScrollToTop();

  const {
    register,
    setValue,
    formState: { dirtyErrors, isError, data: formData, errors },
  } = useForm(rules);
  console.log('>> Check | formData:', formData);

  const handle = (e) => {
    const file = e.target.files[0];
    setImg1(file);
  };
  const handle2 = (e) => {
    const file = e.target.files[0];
    setImg2(file);
  };
  const handle3 = (e) => {
    const file = e.target.files[0];
    setImg3(file);
  };
  const handle4 = (e) => {
    const file = e.target.files[0];
    setImg4(file);
  };
  const handle5 = (e) => {
    const file = e.target.files[0];
    setImg5(file);
  };
  const handle6 = (e) => {
    const file = e.target.files[0];
    setImg6(file);
  };

  const isDisabled = () => {
    const { description, address } = errors;

    if (currentStep === 0) {
      return !!(description || address);
    }
  };

  const ShowedStep = [
    <StepOne
      setValue={setValue}
      register={register}
      dirtyErrors={dirtyErrors}
      brands={brands}
      models={models}
      types={types}
      errors={errors}
      car={car}
    />,
    <StepTwo
      setValue={setValue}
      register={register}
      dirtyErrors={dirtyErrors}
      car={car}
    />,
    <StepThree
      car={car}
      setValue={setValue}
      register={register}
      dirtyErrors={dirtyErrors}
      handle={handle}
      handle2={handle2}
      handle3={handle3}
      handle4={handle4}
      handle5={handle5}
      handle6={handle6}
    />,
  ][currentStep];

  const upload = async () => {
    const _formData = new FormData();
    _formData.append('image1', img1);
    _formData.append('image2', img2);
    _formData.append('image3', img3);
    _formData.append('image4', img4);
    _formData.append('image5', img5);
    _formData.append('image6', img6);
    _formData.append('price', formData.price);
    _formData.append('year_manufacture', formData.year);
    _formData.append('number_plate', formData.licensePlate);
    _formData.append('description', formData.description);
    _formData.append('address', formData.address);
    _formData.append('brand_id', formData.brand);
    _formData.append('model_id', formData.model);
    _formData.append('car_type_id', formData.type);
    _formData.append('customer_id', localStorage.getItem('USER_ID'));

    await http.post('/create_car', _formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    window.location.href = '/profile?tab-index=2';
  };

  const getPrevButton = () => {
    const disabled = currentStep === 0;
    return {
      disabled,
      type: 'button',
      onClick: () => {
        if (!disabled) setCurrentStep((prev) => prev - 1);
      },
    };
  };

  return (
    <div className="RegisterCarForm page-layout">
      <div className="steps">
        {STEPS.map((step, index) => (
          <Fragment key={index}>
            <div className={`step ${currentStep === index ? 'actived' : ''}`}>
              <span>{index + 1}</span>
              {step.label}
            </div>
            {index !== STEPS.length - 1 && <ChevronRightIcon />}
          </Fragment>
        ))}
      </div>
      {ShowedStep}

      <div className="buttons">
        <Button size="lg" variant="outline" {...getPrevButton()}>
          Quay lại
        </Button>

        {currentStep === STEPS.length - 1 ? (
          <Button
            disabled={!img1 || !img2 || !img3 || !img4 || !img5 || !img6}
            size="lg"
            onClick={upload}
          >
            Đăng ký
          </Button>
        ) : (
          <Button
            size="lg"
            type="button"
            // disabled={isDisabled()}
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            Kế tiếp
          </Button>
        )}
      </div>
    </div>
  );
};

const StepOne = ({
  setValue,
  register,
  dirtyErrors,
  errors,
  brands,
  models,
  types,
  car,
}) => {
  const years = [];

  // Tạo danh sách các năm từ 2070 đến 2023
  for (let year = 2007; year <= 2023; year++) {
    years.push({
      label: year,
      value: year,
    });
  }
  return (
    <Fragment>
      <div className="section">
        <div className="title">Biển số xe</div>
        <div className="warning">Bạn không thể thay đổi biển số xe</div>
        <div className="half">
          <Input disabled placeholder={car?.number_plate} />
        </div>
      </div>

      <div className="section">
        <div className="title">Thông số cơ bản</div>
        <div className="warning">
          Lưu ý: Lưu ý: Thông số cơ bản sẽ không thể thay đổi sau khi đăng ký
        </div>
        <div className="input-group">
          <div className="input-section">
            <div className="label">Hãng xe</div>
            <Input disabled placeholder={car?.brand_name} />
          </div>
          <div className="input-section">
            <div className="label">Mẫu xe</div>
            <Input disabled placeholder={car?.model_name} />
          </div>
          <div className="input-section">
            <div className="label">Loại xe</div>
            <Input disabled placeholder={car?.car_type_name} />
          </div>
          <div className="input-section">
            <div className="label">Năm sản xuất</div>
            <Input disabled placeholder={car?.year_manufacture} />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="title">Địa chỉ</div>
        <textarea rows={4} {...register('address', car?.address)} />
        {dirtyErrors['address'] && (
          <span className="invalid">{dirtyErrors['address']}</span>
        )}
      </div>
      <div className="section">
        <div className="title">Mô tả</div>
        <textarea rows={8} {...register('description', car?.description)} />
        {dirtyErrors['description'] && (
          <span className="invalid">{dirtyErrors['description']}</span>
        )}
      </div>
    </Fragment>
  );
};

const StepTwo = ({ register, dirtyErrors, car }) => {
  return (
    <div className="half">
      <div className="input-section">
        <div className="label">Giá cho thuê mặc định</div>
        <div className="info">Đơn giá theo ngày</div>
        <Input suffix="K" isNumberInput {...register('price', car?.price)} />
        {dirtyErrors['price'] && (
          <span className="invalid">{dirtyErrors['price']}</span>
        )}
      </div>
    </div>
  );
};

const StepThree = ({
  setValue,
  register,
  dirtyErrors,
  handle,
  handle2,
  handle3,
  handle4,
  handle5,
  handle6,
  car,
}) => {
  const carImages = car?.image?.split('-');
  return (
    <div className="StepThree">
      <div className="section">
        <div className="title">Hình ảnh xe</div>
        <div className="car-images">
          <UploadImage
            className="car"
            defaultImage={`${IMAGES_URL}/${carImages[0]}`}
            onChange={handle}
          />
          <UploadImage
            className="car"
            defaultImage={`${IMAGES_URL}/${carImages[1]}`}
            onChange={handle2}
          />
          <UploadImage
            className="car"
            defaultImage={`${IMAGES_URL}/${carImages[2]}`}
            onChange={handle3}
          />
          <UploadImage
            className="car"
            defaultImage={`${IMAGES_URL}/${carImages[3]}`}
            onChange={handle4}
          />
        </div>
      </div>
      <div className="section">
        <div className="title">Hình ảnh chứng minh xe</div>
        <div className="car-papers">
          <UploadImage className="identity-car" onChange={handle5} />
          <UploadImage className="identity-car" onChange={handle6} />
        </div>
      </div>
    </div>
  );
};
export default RegisterCarFormEdit;
