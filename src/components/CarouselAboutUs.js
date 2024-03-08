import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_1.png" alt="Imagen 1" style={{ width: '100%', maxWidth: '6000px', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_2.png" alt="Imagen 2" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_3.png" alt="Imagen 3" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_4.png" alt="Imagen 4" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_5.png" alt="Imagen 5" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_6.png" alt="Imagen 6" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
      </div>
    </Slider>
  );
};

export default Carousel;