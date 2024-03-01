import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="#voluntarios">Voluntarios</a></li>
                <li><a href="#adopcion">Adopción</a></li>
                <li><a href="#tienda-solidaria">Tienda Solidaria</a></li>
            </ul>
        </nav>
    );
}

const NavBar = () => {
    return (
        <>
            <Navigation />
            <style jsx>{`
                nav {
                    background-color: var(--colorPrincipal);
                }
            `}</style>
        </>
    );
}

export default NavBar;