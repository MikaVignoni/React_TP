
import Formulario from "./Formulario"

const Adoptar = () => {
  return ( <>

    <h2>Adoptar</h2>

    <p>Si estás considerando la posibilidad de darle un hogar amoroso a una mascota necesitada completa nuestro formulario de adopción y pronto nos pondremos en contacto contigo. </p>
    <p>Queremos asegurarnos de brindarte toda la información necesaria para que puedas tomar la mejor decisión para ti y para tu futura mascota. Desde detalles sobre el cuidado y las necesidades de nuestros animales hasta consejos sobre la transición a su nuevo hogar, estamos aquí para ayudarte en cada paso del proceso. </p>
    <p>Te invitamos a programar una visita al refugio, donde podrás conocer a nuestros adorables residentes y descubrir quién podría convertirse en tu compañero peludo ideal. </p>
    <p>¡Esperamos con ansias poder acompañarte en este emocionante viaje hacia la adopción de tu nueva mascota!  </p>
    
    <div className="Formulario">  
      <Formulario /> 
    </div>

    <style jsx> {`
      .Formulario{
        margin: 30px 0px 20px;
      }

    `} </style>

       
  </>)
}

export default Adoptar

