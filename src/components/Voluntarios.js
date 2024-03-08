
import React from 'react';

const Voluntarios = () => {
  return (
    <div className="Voluntarios"> 

      <h2>Voluntarios</h2>
      
      <h3>Unite al equipo</h3>
      
      <p>En Huellitas cada vida importa y cada gesto de ayuda cuenta. 
      Siempre hay espacio para más manos y corazones solidarios. Hay muchas formas de colaborar y toda la ayuda es bienvenida con los brazos abiertos.
      Ven a visitarnos y conoce a los animales que esperan ansiosamente formar parte de una familia amorosa. Juntos, podemos marcar la diferencia en las vidas de estas preciosas almas, una pata a la vez. Únete a nosotros en nuestra misión de asegurar que cada animal conozca el calor y la comodidad de un hogar para siempre.</p>
      
      <h3>Hogar temporal</h3>
      
      <p>A diario rescatamos camadas de cachorros y animales heridos que necesitan cuidados especiales. Buscamos voluntarios que los acojan en sus hogares brindándoles amor y cariño hasta que estén listos para ser vacunados y trasladados al centro. Igualmente, perros y gatos operados o que sufrieron maltrato, requieren hogares tranquilos para su recuperación. Es importante que alguien los cuide y observe cómo se recuperan. También hay animales mayores, quienes anhelan cariño y comodidad en sus últimos años.</p>

      <h3>Paseadores</h3>
    
      <p>Toma la correa y dejá huellitas ¿Quieres ser parte de la magia de Huellitas? Conviértete en un paseador de nuestros adorables perros rescatados. Disfruta de la compañía de estos peludos amigos mientras exploras los alrededores de nuestro refugio. Cada paso que das con ellos no solo les brinda ejercicio y estimulación mental, sino que también les ayuda a socializar y a prepararse para encontrar un hogar amoroso. Como paseador, tienes la oportunidad de marcar una diferencia significativa en la vida de estos animales, proporcionándoles atención individualizada y amor incondicional. Únete a nosotros como paseador!</p>

    
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

export default Voluntarios; 















