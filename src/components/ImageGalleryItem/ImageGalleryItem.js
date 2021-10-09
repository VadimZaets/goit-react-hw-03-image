import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, onImageClick  }) => {
 const fullImage = () => onImageClick(image.largeImageURL);

  return (
    <li   id={image.id}   className = 'ImageGalleryItem'>
      <img
        className ="ImageGalleryItem-image "
        src={image.webformatURL}
        alt={image.tags}
      onClick={fullImage}
      />
    </li>
  );
};


export default ImageGalleryItem;

