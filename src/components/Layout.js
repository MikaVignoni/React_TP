import NavBar from "../components/NavBar"
import Footer  from "../components/Footer";
import Head from 'next/head'


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
        
        <div className="Page-Content">
          {children}
        </div>

      </main>
      
      <Footer className="Footer" />


      <style jsx> {`
        main{
          position: relative;
          min-height: 90vh;
        }

        .Page-Content{
          max-width: 1000px;
          margin: 0 auto;
        }

        .Footer {
          position: fixed;
          bottom: 0px;
          width: 100%;
        }

      `} </style>


    </>
  );
}
