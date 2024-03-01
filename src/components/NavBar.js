import Link from 'next/link'


const NavBar = () => {
  return ( <>
    <nav>
      <ul>

        <li> 
          <Link href="/" legacyBehavior>
            <a>  INICIO </a> 
          </Link>
        </li> 

        <li> 
          <Link href="/about_us" legacyBehavior>
            <a> About Us </a> 
          </Link>
        </li> 

        <li> 
          <Link href="/tienda" legacyBehavior>
            <a> Tienda Solidaria </a> 
          </Link>
        </li> 



      </ul>

    </nav>


    <style jsx> 
    {`
      nav{
        background-color: var(--colorPrincipal);
      }
    `}
    </style>



  </> )
}


export default NavBar