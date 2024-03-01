import { jsx } from "react/jsx-runtime"
import Formulario from "./Formulario"

const Adoptar = () => {
  return (
    <div>
      <h2>Adoptar</h2>
      <p>Si estás considerando la posibilidad de darle un hogar amoroso a una mascota necesitada completa nuestro formulario de adopción y pronto nos pondremos en contacto contigo. 
        Queremos asegurarnos de brindarte toda la información necesaria para que puedas tomar la mejor decisión para ti y para tu futura mascota. Desde detalles sobre el cuidado y las necesidades de nuestros animales hasta consejos sobre la transición a su nuevo hogar, estamos aquí para ayudarte en cada paso del proceso. 
        Te invitamos a programar una visita al refugio, donde podrás conocer a nuestros adorables residentes y descubrir quién podría convertirse en tu compañero peludo ideal. 
        ¡Esperamos con ansias poder acompañarte en este emocionante viaje hacia la adopción de tu nueva mascota! </p>

        <Formulario></Formulario>

    </div>
  )
}

<style jsx>
.adopcion-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.adopcion-container h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.adopcion-container p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}
</style>