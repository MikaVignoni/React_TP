
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link href="#sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link href="#voluntarios">Voluntarios</Link></li>
                <li><Link href="#adopcion">Adopción</Link></li>
                <li><Link href="#tienda-solidaria">Tienda Solidaria</Link></li>
                <li className="navbar-right">
                    <a href="#carrito">Carrito de Compras</a>
                </li>
            </ul>
       </nav>
    );
}

function NavBar() {
    return (
        <>
            <Navigation />
            <style jsx>{`
                nav {
                    background-color: var(--colorPrincipal);
                }

                .navbar a {
                    float: left;
                    color: black;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                }

                .navbar a:hover {
                    background-color: var(--colorBackground);
                    color: black;
                }

                .navbar-right {
                    position: relative;
                }

                .navbar-right a {
                    padding-right: 40px;
                }

                .navbar-right .cart-icon {
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    transform: translateY(-50%);
                    width: 24px;
                    height: 24px;
                    background-image: public/Icono de bag de compras.jpeg
                    background-size: cover;
                }
            `}</style>
        </>
    );
}

export default NavBar;