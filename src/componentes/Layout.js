import styles from "../styles/Home.module.css";
import NavBar from "../componentes/NavBar"
import Footer  from "../componentes/Footer";

export default function Layout({title,children}) {
  return (
    <>
      <Head>
        <title>{title ? title : "HUELLITAS"}</title>
        <meta name="description" content="Huellitas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        
        {children}

        <Footer />
      </main>
    </>
  );
}
