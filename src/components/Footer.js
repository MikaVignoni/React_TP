
import Link from 'next/link';
import Mail from './icons/Mail';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Whatsapp from './icons/Watsapp';
import MapaPin from './icons/MapaPin';

const Footer = () => {
  return ( 
  <>
    <footer>
      <div className="container">
        <div className='footer-links'>
        <Link href="/" legacyBehavior>
            <a>  
              <img src="/img/Huella/Huellitas_Icon.png" height="60px" title="huellita">
              </img>
            </a> 
          </Link>       
        </div>

        <div className="footer-row">
          <h4>Seguinos en redes:</h4> 
        </div>
        <div className="footer-row">   
          <div className='footer-links'>
            <div className='social-links'>
                <Link href="facebook.com" legacyBehavior>
                  <a><Facebook/></a>
                </Link>
                <Link href="instagram.com" legacyBehavior>
                  <a><Instagram/></a>
                </Link>
                <Link href="whatsapp" legacyBehavior>
                  <a><Whatsapp/></a>
                </Link>
              </div>        
          </div>
        </div>
        <div className="footer-row">
        <Link href="mail" legacyBehavior>
                  <a><Mail/></a>
        </Link>
          <h4>huellitas@refugio.com</h4> 
        </div>
        <div className="footer-row">
        <Link href="mapapin" legacyBehavior>
                  <a><MapaPin/></a>
        </Link>
          <h4>La Plata, Argentina</h4> 
        </div>
      </div>
    </footer>

  

    <style jsx> 
    {`
      footer{
        background-color: var(--colorPrincipal);
      }
    `}
    </style>



  </>
  )
}

export default Footer;