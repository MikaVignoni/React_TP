import Head from "next/head";
import Inicio from "@/components/Inicio";
import NavBar from "@/components/NavBar";
import Formulario from "@/components/Formulario";


export default function Home() {
  return (
    <>
      <Head>
        <title>HUELLITAS</title>
        <meta name="description" content="Huellitas - Refugio de Mascotas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar></NavBar>

        <h1>Esto es un H1</h1>
        <h2>Esto es un H2</h2>
        <h3>Esto es un H3</h3>
        <p>Esto es un p</p>

        <Formulario></Formulario>


        <Inicio/>
      </main>
    </>
  );
}
