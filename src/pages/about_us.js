import Layout from "../components/Layout";
import Voluntarios from "../components/Voluntarios";
import Adoptar from "../components/Adoptar";
import AboutUs from "../components/AboutUs";

export default function About_us() {
  return (
    <Layout title={"HUELLITAS - Conocenos"}> 

        <AboutUs />
        <Voluntarios />
        <Adoptar />

    </Layout>
  );
}
