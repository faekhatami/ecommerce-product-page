import React from "react";

const ImageGallery = ({ images = [] }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.description} />
      ))}
    </div>
  );
};

export default ImageGallery;
