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
            `}</style>
    </>
  );
}

export default NavBar;