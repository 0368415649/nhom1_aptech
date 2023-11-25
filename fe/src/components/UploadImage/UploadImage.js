import React, { useState } from 'react';
import cx from 'classnames';

import Img from '../Img';

import './UploadImage.scss';
import { PlusIcon, TrashIcon } from '../Svg';

const UploadImage = ({
  defaultImage = null,
  className = '',
  readOnly = false,
  ...props
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [removeDefaultImage, setRemoveDefaultImage] = useState(false);

  const classes = cx('UploadImage', className);

  const remove = () => {
    if (readOnly) return;
    setSelectedImage(null);
    defaultImage && setRemoveDefaultImage(true);
  };

  return (
    <div className={classes}>
      {!removeDefaultImage && defaultImage && (
        <>
          <Img src={`${defaultImage}`} alt="car" />
          {!readOnly && (
            <div className="remove-img" onClick={remove}>
              <TrashIcon className="icon" />
            </div>
          )}
        </>
      )}
      {selectedImage && (
        <>
          {!readOnly && (
            <div className="remove-img" onClick={remove}>
              <TrashIcon className="icon" />
            </div>
          )}
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
