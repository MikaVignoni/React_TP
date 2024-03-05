import Layout from "../components/Layout";
import ShoppingContextProvider from "../context/ShoppingContextProvider"
import CartList from "@/components/CartList";

export default function Cart() {
  return (
  <>
    <Layout title={"HUELLITAS - Carrito"}> 

      <ShoppingContextProvider>

        <h2>Tienda Solidaria</h2>

        <p>Cada compra que realizas tiene un impacto directo en la vida de nuestros adorables animales.</p>
        <p>Nuestra tienda ofrece productos de calidad para tus mascotas y te brinda la oportunidad de practicar la compra solidaria. El importe íntegro de tus compras es invertido en las instalaciones y necesidades de cada animalito rescatados.</p>
        <p>Haz que cada compra cuente. ¡Gracias por tu apoyo incondicional para darles una segunda oportunidad a nuestros amigos peluditos! </p>

        <CartList />


      </ShoppingContextProvider>

    </Layout>

    <style jsx> {`
    `} </style>

  </>
  );
}