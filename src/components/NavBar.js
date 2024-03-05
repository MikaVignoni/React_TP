
import Link from 'next/link';
import React from 'react';


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

        <li> 
          <Link href="/cart" legacyBehavior>
            <a> Carrito de Compras </a> 
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


export default NavBar;