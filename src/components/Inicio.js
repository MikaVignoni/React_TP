import Carrousel from "./CarrouselInicio"

const Inicio = () => {
  return ( <>



    <div>
      {/* <img src="/img/Inicio/Inicio_3.png" alt="Imagen 1" /> */}
    </div>

    <h1>Inicio</h1>

    <a href="/about_us">
      <h2>Conocenos</h2>
    </a>
     

    <style jsx> 
    {`
      div{height: 100vh; background:lightBlue; position: relative;}
      img{height: 100%; width: auto; position: absolute; left: 50%; transform: translate(-50%, -0%);} /*height: '100vh', width: 'auto' */

      {/* div{background-image: url("Inicio_3.png"); background-position: center; background-repeat: no-repeat; background-size: cover;}  */}
     /* img{height: 100%; width: auto; position: absolute; left: 50%; transform: translate(-50%, -0%);} /*height: '100vh', width: 'auto' */




      h1{
        position: absolute;
        z-index: 1000; 
        display: none;
      }

      a{
        position: absolute;
        z-index: 1000; 
        display: none;
      }

    `}
    </style>

  </> )
}

export default Inicio