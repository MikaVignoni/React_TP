import React from "react"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AboutUs = () => {
  return (

<div className="sobre-nosotros">
  <h2>Sobre Nosotros</h2>
  
  <h3>¡Bienvenido a Huellitas!</h3>

<p> En Huellitas, creemos en el poder transformador del amor incondicional que las mascotas brindan a nuestras vidas. Somos un refugio comprometido con el bienestar y la protección de animales abandonados y maltratados, ofreciéndoles un hogar temporal seguro mientras buscamos familias amorosas que los adopten para siempre.
Nuestra historia comenzó con un pequeño grupo de amantes de los animales que se unieron con un objetivo común: proporcionar refugio, atención médica y cariño a las mascotas desamparadas de nuestra comunidad. Desde entonces, hemos dedicado incansables esfuerzos para ofrecer un ambiente cálido y acogedor donde cada animal se sienta querido y valorado.
En Huellitas, no solo proporcionamos un techo sobre sus cabezas y comida en sus platos; también les ofrecemos atención veterinaria integral, programas de socialización y actividades recreativas para asegurarnos de que cada mascota se sienta segura, feliz y saludable mientras espera su hogar definitivo.
Nuestro equipo está formado por apasionados defensores de los derechos de los animales y profesionales comprometidos que trabajan arduamente para garantizar que cada mascota reciba el amor y la atención que merece. Además, contamos con una red de voluntarios dedicados y generosos donantes que son el corazón de nuestra organización.
En Huellitas, no solo estamos comprometidos con el rescate y la adopción de mascotas, sino también con la educación de la comunidad sobre la importancia de la tenencia responsable de animales y la prevención del abandono y el maltrato animal.
Cada vez que una mascota encuentra un hogar amoroso y una familia para siempre, sentimos una profunda gratitud y alegría por ser parte de esa conexión especial. Nos emociona seguir transformando vidas, una pata a la vez.
Gracias por visitar Huellitas y por ser parte de nuestro viaje para hacer del mundo un lugar mejor para todas las criaturas de cuatro patas. Juntos, estamos cambiando vidas y creando vínculos que perduran para siempre.

</p>


<style jsx>{`
        
        h2 {
          font-size: 28px;
          font-family: "Kurale", serif;
          font-style: normal;
          padding-top: 20px;
          color: var(--colorPrincipal);
          padding: 10px 20px;
          text-align: center;
        }
        h3{
          font-size: 22px;
          font-family: "Kurale", serif;
          font-style: normal;
          padding-bottom: 10px;
          color: var(--colorDetalles);
          padding: 10px 20px;

      }
        p {
          font-family: 'Inter', sans-serif;
          color: #31383F;
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 20px;
          text-align: justify;
          padding: 10px 20px;

        }
      `}</style>
</div>

  );
};

export default AboutUs;