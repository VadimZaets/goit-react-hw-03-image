import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images, openModal}) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem  openModal={openModal} key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;


