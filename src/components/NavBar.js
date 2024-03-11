import { useState } from 'react';
import ShoppingCart from './icons/ShoppingCart';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return ( <>
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={menuOpen ? "navbar-list open" : "navbar-list"}>
        <li> <a href="/"> Inicio </a> </li>
        <li> <a href="/about_us"> Sobre Nosotros </a> </li>
        <li> <a href="/tienda"> Tienda Solidaria </a> </li>
      </ul>

      <div className="logo">
        <img src="../img/Huella/Huellitas_Icon.png" alt="Logo"/>
        <img src="../img/Logotipo/Logotipo_huellitas_negro.png" alt="Logo" />
      </div>

      <div className="cart">
        <a href="/cart" > <ShoppingCart />  </a>
      </div>

    </nav>

    <style jsx> {`
      .navbar {
        background-color: var(--colorPrincipal);
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0px;
        color: black;
        font-weight: bold;
      }

      .logo img {  height: 60px;   padding-right: 20px; }

      .navbar-list {
        list-style-type: none;
        padding: 30px;
        margin: 60px 0px;
        display: flex;
        display: none;  
        position: absolute;
        top: 60px; 
        background-color:var(--colorPrincipal); 
        z-index: 1000; 
        transition: transform 0.3s ease-in-out; 
        transform: translateY(-100%);
        text-align: left;
        flex-direction: column;
      }

      .navbar-list.open { display: flex;  transform: translateY(0); }
      .navbar-list li { margin-bottom: 10px; }
      .navbar-list li:last-child { margin-bottom: 0; }
      .menu-toggle {  cursor: pointer;  padding: 0px 20px; }
      .bar { width: 25px; height: 3px; background-color: black; margin: 3px 0; }
      .cart {color: var(--colorText); opacity: 0.8; font-size: 10px; padding: 0px 20px; }

      @media screen and (max-width: 600px) 
      {
        .menu-toggle {
          display: flex; 
          flex-direction: column;
          justify-content: space-between;
          height: 30px; 
        }
        
        .logo img {
          height: 40px; 
          padding-right: 10px;
        }

        .cart {
          color: var(--colorText);
          opacity: 0.8;
          font-size: 5px;   
          padding: 0px;
        }
      }

    `} </style>

  </> );
};

export default NavBar;