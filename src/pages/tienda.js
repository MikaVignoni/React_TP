import Shopping from "../components/Shopping";
import Layout from "../components/Layout";

export default function Tienda() {
  return ( <>
    <Layout title={"HUELLITAS - Tienda Solidaria"}> 

      <h2>Tienda Solidaria</h2>

      <p>Cada compra que realizas tiene un impacto directo en la vida de nuestros adorables animales. Nuestra tienda ofrece productos de calidad para tus mascotas y te brinda la oportunidad de practicar la compra solidaria. El importe íntegro de tus compras es invertido en las instalaciones y necesidades de cada animalito rescatados.
        <br/> Haz que cada compra cuente. <span>¡Gracias por tu apoyo! </span> 
      </p> 

      <Shopping />


    </Layout>

  </> );
}
