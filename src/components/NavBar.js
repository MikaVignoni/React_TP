
import Link from 'next/link';
import React from 'react';
import ShoppingCart from './icons/ShoppingCart';
import Logotipo_huellitas_negro from '/Users/violetazalazarmontori/Desktop/React_TP/public/img/Logotipo/Logotipo_huellitas_negro.png';

const NavBar = () => {
  return (
    
           <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <Link href="/" legacyBehavior>
                  <a>INICIO</a>
                </Link>
              </li>
              <li>
                <Link href="/about_us" legacyBehavior>
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/tienda" legacyBehavior>
                  <a>Tienda Solidaria</a>
                </Link>
              </li>
            </ul>
            <div className="logo">
              <img src="../img/Huella/Huellitas_Icon.png" alt="Logo"/>
              <img src="../img/Logotipo/Logotipo_huellitas_negro.png" alt="Logo" />
            </div>
         
            <div className="cart">
               <a href="/cart" legacyBehavior>
                  <ShoppingCart />
                </a>
            </div>
      
      
      <style jsx>{`
        .navbar {
          background-color: var(--colorPrincipal);
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          color: black;
          font-weight: bold
        }
        

        .logo img {
          height: 60px; 
          padding-right: 20px;
        }

        .navbar-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;  
        }

        .navbar-list li {
          margin-bottom: 10px;  
        }

        .navbar-list li:last-child {
          margin-bottom: 0;  
        }

        .navbar-list a {
          text-decoration: none;
          color: black;
          font-size: 16px;
          padding: 10px;
        }
        
        .cart {
          color: black;
          font-size: 10px;   
        }

      `}</style>
    </nav>
  );
};

export default NavBar;