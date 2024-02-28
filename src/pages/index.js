
import styles from "../styles/Home.module.css";
import CarruselInicio from "../componentes/CarruselInicio"


export default function Home() {
  return (
    <> //* LANDING PAGE *//
      <Head>
        <title>HUELLITAS</title>
        <meta name="description" content="Huellitas - Refugio de Mascotas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CarruselInicio />
      </main>
    </>
  );
}
