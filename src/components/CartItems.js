

function CartItems(props) {

    const {product, ADD_ITEM_TO_CART} = props;
  
  
    const handleButtonClick = () => {
      const isConfirmed = window.confirm(
        product.collected
          ? `You already have this card. 
          Do you want to buy it again?`
          : `Do you want to buy this card?`
      );
  
      if (isConfirmed) { ADD_ITEM_TO_CART(product.id); }
    };
    
  
    return (
      <>
          <figure>
            <img  key= {product.id} src={product.img[0]} alt={product.name} />
            
            <figcaption>
              <h3> {product.name} </h3>
              <p>{product.price}</p>
              <button onClick={handleButtonClick}>
                Añadir al Carrito
              </button>          
            </figcaption>
          
          </figure>
  
          <style jsx>{`
            /* * * * * * *   CUSTOM PROPERTIES   * * * * * * */
            figure {
              width: 250px; 
              height: 440px;
              border: none;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-size: 15px;
              text-decoration: none;
              letter-spacing: 0.3px;   
              font-weight: normal;
              border-radius: 10px;
              box-shadow: 8px 8px 16px rgba(165, 177, 198, 0.8), -8px -8px 16px rgba(255, 255, 255, 0.8); /* (165, 177, 198, 0.7)     rgba(255, 255, 255, 0.99);  celestito rgba(230, 243, 255, 0.9)*/ 
              text-align: center;
            }
  
            img {
              width: 80%;
              height: 45%;
              object-fit: cover;
              margin-top: 20px;
              margin-bottom: 30px;
              border-radius: 10px;
              transition: transform 0.2s ease-out;
            }
  
            h3 {
              font-size: 1.4rem;
              font-weight: 900;
              margin-bottom: 30px;
            }
  
  
            button{
              align-items: center;
              justify-content: center;
              transition: 0.1s box-shadow ease-in-out;
              cursor: pointer;
              border-radius: 10px;
              font-weight: normal;
  
              box-shadow: -8px -8px 20px 0px #fff9, -6px -6px 6px 0px #fff9,
                8px 8px 20px 0px #0001, 5px 5px 6px 0px #0001, inset 0px 0px 0px 0px #fff9,
                inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
                inset 0px 0px 0px 0px #0001;
              border: none;
  
              color: #a5b1c6;
              opacity: 0.8;
              font-size: 18px;
              padding: 10px 20px;
            }
  
            button:hover {
              transform: translateY(2px);
              box-shadow: none;
              
            }
  
            button:active{
              box-shadow: 0px 0px 0px 0px #fff9, 0px 0px 0px 0px #fff9,
              0px 0px 0px 0px #0001, 0px 0px 0px 0px #0001, inset -8px -8px 20px 0px #fff9,
              inset -5px -5px 6px 0px #fff9, inset 8px 8px 20px 0px #0003,
              inset 5px 5px 6px 0px #0001;
              color: #a5b1c6;
              opacity: 1;
              font-size: 15px;
            }
            /* Extra small devices (phones, 600px and down) */
            @media only screen and (max-width: 600px) {
  
              figure { width: 200px; height: 300px; }
              img { width: 75%; margin-bottom: 20px; }
              button{ font-size: 15px; }
  
  
            h3 {
              font-size: 1.4rem;
              font-weight: 900;
              margin-bottom: 30px;
            }
  
  
            button{
              align-items: center;
              justify-content: center;
              transition: 0.1s box-shadow ease-in-out;
              cursor: pointer;
              border-radius: 10px;
              font-weight: normal;
  
              box-shadow: -8px -8px 20px 0px #fff9, -6px -6px 6px 0px #fff9,
                8px 8px 20px 0px #0001, 5px 5px 6px 0px #0001, inset 0px 0px 0px 0px #fff9,
                inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
                inset 0px 0px 0px 0px #0001;
              border: none;
  
              color: #a5b1c6;
              opacity: 0.8;
              font-size: 18px;
              padding: 10px 20px;
            }
  
            }
  
          `}</style>
      </>
    )
  }
  
  export default CartItems