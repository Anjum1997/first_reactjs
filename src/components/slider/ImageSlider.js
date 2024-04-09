

import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const next = () => {
    const isLastSlide = imageIndex === images.length - 1;
       const newIndex = isLastSlide ? 0 :imageIndex + 1;
       setImageIndex(newIndex);
  };

  const prev = () => {
    const isFirstSlide = imageIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 :imageIndex - 1;
       setImageIndex(newIndex);
  };
  

  return (
    <div className="container-img">
    <div className="slider-images">
    <h1>welcome to the company<br/> as a software developer </h1>
<p>congratulations to all for your dedication and<br/>hard work at every moment for the growth<br/> and development of the company. </p>
<button type ="button" className="begin">ready to begin...</button>
      <button className="l_arrow" onClick={prev}> ❰ </button>
      <button className="r_arrow" onClick={next}> ❱ </button>
      {images.map((image, index) => (
        <div
          key={index}
        className={index === imageIndex ? 'slide active' : 'slide'}
        >
           <img src={image.url} alt="nature"/>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default ImageSlider;
