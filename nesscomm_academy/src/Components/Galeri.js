import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DummyGaleri from "../Assets/jokowi.jpg";
import ProgramImage1 from '../Assets/program-1.svg';
import ProgramImage2 from '../Assets/program-2.svg';
import ProgramImage3 from '../Assets/program-3.svg';
import ProgramImage4 from '../Assets/program-4.svg';
import ProgramImage5 from '../Assets/program-5.svg';
import ProgramImage6 from '../Assets/program-6.svg';

const images = [DummyGaleri, ProgramImage1, ProgramImage2, ProgramImage3];

const images2 = [ProgramImage4, ProgramImage5, ProgramImage6];

const Gallery = () => {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      cssEase: "linear"
    };
  
    return (
      <div className="gallery-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <Slider {...settings}>
          {images2.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <Slider {...settings}>
          {images2.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Gallery;
