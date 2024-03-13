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
        <Link href="/" >
              <img src="Huellitas_Icon.png" height="60px" title="huellita" >
              </img>
          </Link>       
        </div>

        <div className="footer-row">
          <h4>Seguinos en redes:</h4> 
        </div>
        <div className="footer-row">   
          <div className='footer-links'>
            <div className='social-links'>
                <Link href="facebook.com" >
                  <Facebook/>
                </Link>
                <Link href="instagram.com" >
                  <Instagram/>
                </Link>
                <Link href="whatsapp" >
                  <Whatsapp/>
                </Link>
              </div>        
          </div>
        </div>
        <div className="footer-row">
        <Link href="mail" >
          <Mail/>
        </Link>
          <h4>huellitas@refugio.com</h4> 
        </div>
        <div className="footer-row">
        <Link href="mapapin" >
            <MapaPin/>
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