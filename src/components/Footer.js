
import Link from 'next/link';
import Mail from './icons/Mail';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Whatsapp from './icons/Whatsapp';
import MapaPin from './icons/MapaPin';

const Footer = () => {
  return ( 
    <>
    <footer>
      <div className="container">
        <div className='footer-links'>
          <Link href="/" >
            <img src="Huellitas_Icon.png" height="60px" alt="huellita" />
          </Link>       
        </div>

        <div className="footer-row">
          <h4>Seguinos en redes:</h4> 
          <div className='footer-links'>
            <div className='social-links'>
              <Link href="https://facebook.com" >
                <Facebook />
              </Link>
              <Link href="https://instagram.com" >
                <Instagram />
              </Link>
              <Link href="https://whatsapp.com" >
                <Whatsapp />
              </Link>
          </div>
        </div>

        <div className="footer-row">
          <Link href="mailto:huellitas@refugio.com" >
            <Mail />
          </Link>
          <h4>huellitas@refugio.com</h4> 
        </div>

        <div className="footer-row">
          <Link href="https://mapapin.com" >
            <MapaPin />
          </Link>
          <h4>La Plata, Argentina</h4> 
        </div>
      </div>
      </div>
</footer>
      <style jsx>{`
        footer {
          background-color: var(--colorPrincipal);
          padding: 20px;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-links img {
          display: block;
          height: 60px;
        }
        .footer-row {
          display: flex;
          align-items: center;
        }
        .footer-row h4 {
          margin-left: 10px;
        }
        .social-links {
          display: flex;
          align-items: center;
        }
        .social-links > * {
          margin-right: 10px;
        }

      `}</style>
      </>
  );
};

export default Footer;