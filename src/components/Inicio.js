import { useState, useEffect } from 'react';

const Inicio = () => {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const landingPage = document.querySelector('.LandingPage');
    const imageUrlBase = "/img/Inicio/Inicio_";
    const imageExtension = ".webp";

    function changeBackgroundImage() {
      landingPage.style.backgroundImage = `url('${imageUrlBase}${imageIndex}${imageExtension}')`;
      setImageIndex(prevIndex => (prevIndex % 3) + 1); 
    }

    const intervalId = setInterval(changeBackgroundImage, 5000);

    return () => clearInterval(intervalId);

  }, [imageIndex]);

  return ( <>
    <div className="LandingPage">
      <a href="/about_us"> 

        <div className="background-logo">
          <img src="/img/Logotipo/Logotipo_huellitas_negro.png" alt="Logo Huellitas" /> 
        </div>

        <div className="Conocenos">
          <img src="/img/Huella/Huellitas_Icon.png" alt="Icon Huellitas" id='icon'/>
          <h1>Conocenos</h1>
        </div>
      
      </a>
    </div> 

    <style jsx>
    {`
      .Conocenos,
      .background-logo{
        position: absolute;
        z-index: 1000;
        background:  #FFFFFF80;
        transform: translate(-50%, -0%);
      }

      .Conocenos{ 
        height: 50px;
        width: 255px;
        bottom: 50px;
        left: 50%;
        display: flex; flex-direction:row;
        align-items: center;
        justify-content: space-evenly; 
      }

      .background-logo{
        height: 65px;
        width: 255px;
        padding: 10px 30px;
        top: 50px;
        left: 50%;
      }

      img{
        height: 45px;
        opacity: 0.7;
      }

      #icon{
        height: 30px;
      }
    `}
    </style>

  </>);
}

export default Inicio;
