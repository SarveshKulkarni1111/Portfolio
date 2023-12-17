import React, { Component } from 'react'
import "./awards.css"
import award1 from "../assets/award1.jpg";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Awards = () => {
    const images = [award1];
  return (
    <div>
    <h1>Awards/Honours</h1>
    <div className="responsive-slider-container">
      <Carousel showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
      </div>
  );
}

export default Awards