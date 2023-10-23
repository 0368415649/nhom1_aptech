import React, { useState } from 'react';
import cx from 'classnames';

import Img from '../Img';

import './UploadImage.scss';
import { PlusIcon, TrashIcon } from '../Svg';

const UploadImage = ({ className = '', ...props }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const classes = cx('UploadImage', className);

  const remove = () => setSelectedImage(null);

  return (
    <div className={classes}>
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
