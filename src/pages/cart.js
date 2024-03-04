import Layout from "../components/Layout";
import ShoppingContextProvider from "../context/ShoppingContextProvider"
import CartItems from "../components/CartItems";

export default function Cart() {
  return (
  <>
    <Layout title={"HUELLITAS - Tienda Solidaria"}> 

      <ShoppingContextProvider>

        <h2>Carrito</h2>

        <p>tus</p>

        <CartItems/>

      </ShoppingContextProvider>

    </Layout>

    <style jsx> {`
    `} </style>

  </>
  );
}