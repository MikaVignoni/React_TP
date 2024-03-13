import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_1.jpg" alt="Imagen 1" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_2.jpg" alt="Imagen 2" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_3.jpg" alt="Imagen 3" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_4.jpg" alt="Imagen 4" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_5.jpg" alt="Imagen 5" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_6.jpg" alt="Imagen 6" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_7.jpg" alt="Imagen 7" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_8.jpg" alt="Imagen 8" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_9.jpg" alt="Imagen 9" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/img/AboutUs/AboutUs_0.jpg" alt="Imagen 10" style={{ width: '100%', height: 'auto' }} />
      </div>
    </Slider>
  );
};

export default Carousel;