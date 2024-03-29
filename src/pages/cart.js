import Layout from "../components/Layout";
import YourCart from "../components/YourCart";


export default function Cart() {
  return (<>
    <Layout title={"HUELLITAS - Carrito"}> 

      <h2>Carrito de Compras</h2>
      
      <p>Cada compra que realizas tiene un impacto directo en la vida de nuestros adorables animales.</p>
      <p><span>Gracias por tu apoyo! </span> </p>

      <YourCart />

    </Layout>

    <style jsx> {`
      span{
        color: var(--colorPrincipal);
        font-weight: 600;
        font-size: 14px;
      }
    `} </style>

  </> );
}