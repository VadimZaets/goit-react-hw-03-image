import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, tags } = image;

  return (
    <li   id={image.id} onClick={openModal}  className = 'ImageGalleryItem'>
      <img
        className ="ImageGalleryItem-image "
        src={webformatURL}
        alt={tags}
      
      />
    </li>
  );
};


export default ImageGalleryItem;

