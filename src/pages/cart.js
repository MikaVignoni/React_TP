import YourCart from "@/components/YourCart";
import Layout from "../components/Layout";
import ShoppingContextProvider from "../context/ShoppingContextProvider"
import CartList from "@/components/CartList";

export default function Cart() {
  return (
  <>
    <Layout title={"HUELLITAS - Carrito"}> 

      <ShoppingContextProvider>

        <h2>Carrito de Compras</h2>

        <h2>INTENTO CON TABLA</h2>

        <p>Cada compra que realizas tiene un impacto directo en la vida de nuestros adorables animales.</p>
        <p><span>Gracias por tu apoyo! </span> </p>

        {/* <CartList /> */}

        <h2>INTENTO CON LISTA </h2>

        <YourCart />


      </ShoppingContextProvider>

    </Layout>

    <style jsx> {`
      span{
        color: var(--colorPrincipal);
        font-weight: 600;
        font-size: 14px;
      }
      h2{
        color: var(--colorPrincipal);
      }
    `} </style>

  </>
  );
}