import React, { useState } from 'react';
import './slider.css'; // Import your CSS file

function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slider-container">
      <div className="slide" style={{ backgroundImage: `url(${images[currentSlide]})` }}></div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default ImageSlider;
