import React, { Fragment, useEffect, useState } from 'react';

import { ChevronRightIcon } from '../components/Svg';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

import './styles/RegisterCarForm.scss';
import UploadImage from '../components/UploadImage/UploadImage';
import useForm from '../hooks/useForm';
import http from '../utils/http';

const options = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
];

const STEPS = [
  { label: 'Thông tin' },
  { label: 'Cho thuê' },
  { label: 'Hình ảnh' },
];

const rules = {
  licensePlate: {
    required: 'Biển số xe không được để trống',
  },
  description: {
    required: 'Mô tả không được để trống',
  },
  price: {
    required: 'Giá không được để trống',
  },
  brand: {
    required: 'Hãng xe không được để trống',
  },
  model: {
    required: 'Mẫu xe không được để trống',
  },
  type: {
    required: 'Loại xe không được để trống',
  },
  year: {
    required: 'Năm sản xuất không được để trống',
  },
  address: {
    required: 'Địa chỉ không được để trống',
  },
};

const RegisterCarForm = () => {
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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { dirtyErrors, isError, data: formData, errors },
  } = useForm(rules);

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

  useEffect(() => {
    (async () => {
      const brandUrl = http.get('/get_list_brand');
      const typeUrl = http.get('/get_list_cartype');

      // const { data } = await http.get('/get_list_brand');
      const [{ data: res_brands }, { data: res_types }] = await Promise.all([
        brandUrl,
        typeUrl,
      ]);
      const brands = res_brands?.map((d) => ({
        label: d.brand_name,
        value: d.brand_id,
      }));
      const types = res_types?.map((d) => ({
        label: d.car_type_name,
        value: d.car_type_id,
      }));
      setBrands(brands);
      setTypes(types);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (formData.brand) {
        const { data } = await http.get('/get_list_model', {
          params: {
            brand_id: formData.brand,
          },
        });
        const models = data?.map((d) => ({
          label: d.model_name,
          value: d.model_id,
        }));
        setModels(models);
      }
    })();
  }, [formData.brand]);

  const ShowedStep = [
    <StepOne
      setValue={setValue}
      register={register}
      dirtyErrors={dirtyErrors}
      brands={brands}
      models={models}
      types={types}
      errors={errors}
    />,
    <StepTwo
      setValue={setValue}
      register={register}
      dirtyErrors={dirtyErrors}
    />,
    <StepThree
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

  const getNextButton = () => {
    // const disabled = currentStep === STEPS.length - 1;
    return {
      disabled: currentStep !== STEPS.length - 1 ? false : isError,
      // onClick: () => !disabled && setCurrentStep((prev) => prev + 1),
      type: currentStep !== STEPS.length - 1 ? 'button' : 'submit',
      onClick: () =>
        currentStep !== STEPS.length - 1 && setCurrentStep((prev) => prev + 1),
    };
  };

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
    console.log('????????????????????/');
    // window.location.href = '/profile?tab-index=2';
  };

  const getPrevButton = () => {
    const disabled = currentStep === 0;
    return {
      disabled,
      type: 'button',
      onClick: () => {
        debugger;
        console.log('ádasd');
        if (!disabled) setCurrentStep((prev) => prev - 1);
      },
    };
  };

  return (
    <div className="RegisterCarForm page-layout">
      <div className="steps" onClick={() => setCurrentStep((prev) => prev + 1)}>
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
          <Button size="lg" onClick={upload}>
            Đăng ký
          </Button>
        ) : (
          <Button
            size="lg"
            type="button"
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
        <div className="warning">
          Lưu ý: Biển số xe khổng thể thay đổi sau khi đăng ký
        </div>
        <div className="half">
          <Input {...register('licensePlate')} />
          {dirtyErrors['licensePlate'] && (
            <span className="invalid">{dirtyErrors['licensePlate']}</span>
          )}
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
            <Dropdown
              options={brands}
              setOption={setValue}
              {...register('brand')}
            />
            {errors['brand'] && (
              <span className="invalid">{errors['brand']}</span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Mẫu xe</div>
            <Dropdown
              options={models}
              setOption={setValue}
              {...register('model')}
            />
            {errors['model'] && (
              <span className="invalid">{errors['model']}</span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Loại xe</div>
            <Dropdown
              options={types}
              setOption={setValue}
              {...register('type')}
            />
            {errors['type'] && (
              <span className="invalid">{errors['type']}</span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Năm sản xuất</div>
            <Dropdown
              options={years}
              setOption={setValue}
              {...register('year')}
            />
            {errors['year'] && (
              <span className="invalid">{errors['year']}</span>
            )}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="title">Địa chỉ</div>
        <textarea rows={4} {...register('address')} />
        {dirtyErrors['address'] && (
          <span className="invalid">{dirtyErrors['address']}</span>
        )}
      </div>
      <div className="section">
        <div className="title">Mô tả</div>
        <textarea rows={8} {...register('description')} />
        {dirtyErrors['description'] && (
          <span className="invalid">{dirtyErrors['description']}</span>
        )}
      </div>
    </Fragment>
  );
};

const StepTwo = ({ setValue, register, dirtyErrors }) => {
  return (
    <div className="half">
      <div className="input-section">
        <div className="label">Giá cho thuê mặc định</div>
        <div className="info">Đơn giá theo ngày</div>
        <Input suffix="K" isNumberInput {...register('price')} />
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
}) => {
  return (
    <div className="StepThree">
      <div className="section">
        <div className="title">Hình ảnh xe</div>
        <div className="car-images">
          <UploadImage className="car" onChange={handle} />
          <UploadImage className="car" onChange={handle2} />
          <UploadImage className="car" onChange={handle3} />
          <UploadImage className="car" onChange={handle4} />
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
export default RegisterCarForm;
