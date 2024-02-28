
import styles from "../styles/Home.module.css";
import Layout from "../componentes/Layout";
import ShoppingCards from "@/componentes/ShoppingCards";


export default function Home() {
  return (
    <Layout title={"HUELLITAS - Tienda Solidaria"}> 
        <h2>Tienda Solidaria</h2>
        <p>TEXTO...TEXTO...TEXTO...TEXTO...</p>

        {/* Productos.map((producto), <ShoppingCards key={producto.id} product={producto}/>) */}
        <ShoppingCards/>

    </Layout>
  );
}
