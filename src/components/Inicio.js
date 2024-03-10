import Link from 'next/link'


const Inicio = () => {
  return ( 
    <>
    <h1>Inicio</h1>

    <p> Carrusel 3 fotos + Logo "huellitas" arriba + btn "conocenos"</p>

    <Link href="/about_us" >
      <h2> Conocenos </h2>
    </Link>


    <style jsx> 
    {`

      a{
        font-size: medium;
        text-decoration: none;
      }


    `}
    </style>


    </>
    
  )
  
}

export default Inicio