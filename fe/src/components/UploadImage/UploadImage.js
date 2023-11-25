import React, { useState } from 'react';
import cx from 'classnames';

import Img from '../Img';

import './UploadImage.scss';
import { PlusIcon, TrashIcon } from '../Svg';
import { IMAGES_URL } from '../../configs/urls';

const UploadImage = ({ defaultImage = null, className = '', ...props }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [removeDefaultImage, setRemoveDefaultImage] = useState(false);

  console.log('>> Check | selectedImage:', selectedImage);

  const classes = cx('UploadImage', className);

  const remove = () => {
    setSelectedImage(null);
    defaultImage && setRemoveDefaultImage(true);
  };

  return (
    <div className={classes}>
      {!removeDefaultImage && defaultImage && (
        <>
          <Img src={`${defaultImage}`} alt="car" />
          <div className="remove-img" onClick={remove}>
            <TrashIcon className="icon" />
          </div>
        </>
      )}
      {selectedImage && (
        <>
          <div className="remove-img" onClick={remove}>
            <TrashIcon className="icon" />
          </div>
          <Img
            alt="img"
            src={URL.createObjectURL(selectedImage)}
            className="show-img"
          />
        </>
      )}
      <PlusIcon className="icon" />
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          props.onChange(event);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;
