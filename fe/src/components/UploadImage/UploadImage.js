import React, { useState } from 'react';
import cx from 'classnames';

import Img from '../Img';

import './UploadImage.scss';
import { PlusIcon, TrashIcon } from '../Svg';

const UploadImage = ({ name, className = '' }) => {
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
        className=""
        name={name}
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;
