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

  return (<>
    <div> 

      <Slider {...settings}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/img/Inicio/Inicio_1.png" alt="Imagen 1" style={{ height: '100vh', width: 'auto' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/img/Inicio/Inicio_2.png" alt="Imagen 2" style={{ height: '100vh', width: 'auto' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/img/Inicio/Inicio_3.png" alt="Imagen 3" style={{ height: '100vh', width: 'auto' }} />
        </div>
      </Slider>

    </div>

    <style jsx>
      {`
        div{object-position: 50% 50%;}

      `}
    </style>
  </>);
};

export default Carousel;