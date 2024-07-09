import React, { useState } from "react";

const ImageGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (images.length === 0) return <div>No images available</div>;

  return (
    <div className="image-gallery">
      <button onClick={handlePrev}>Previous</button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].description}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageGallery;
