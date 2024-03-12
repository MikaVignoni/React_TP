import Head from "next/head";
import Inicio from "@/components/Inicio";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
        <Inicio />
      </main>
      
    </>
  );
}
