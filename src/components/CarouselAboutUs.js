import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="./img/foto AboutUs 1.png" alt="Imagen 1" />
      </div>
      <div>
        <img src="./img/foto AboutUs 2.png" alt="Imagen 2" />
      </div>
      <div>
        <img src="./img/foto AboutUs 3.png" alt="Imagen 3" />
      </div>
      <div>
        <img src="./img/foto AboutUs 4.png" alt="Imagen 4" />
      </div>
    </Slider>
  );
};

export default Carousel;