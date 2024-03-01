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
            <a>  About Us </a> 
          </Link>
        </li> 



      </ul>

    </nav>


    <style jsx> 
    {`

    `}
    </style>



  </> )
}


export default NavBar