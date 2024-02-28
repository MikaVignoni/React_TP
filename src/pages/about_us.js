import AboutUs from "../componentes/AboutUs";
import styles from "../styles/Home.module.css";
import Layout from "../componentes/Layout";
import Voluntarios from "../componentes/Voluntarios";
import Adoptar from "../componentes/Adoptar";

export default function Home() {
  return (
    <Layout title={"HUELLITAS - Conocenos"}> 

        <AboutUs />
        <Voluntarios />
        <Adoptar />

    </Layout>
  );
}
