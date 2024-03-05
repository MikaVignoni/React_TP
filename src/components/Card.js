

function Card(props) {
  const {product, ADD_ITEM_TO_CART} = props;
  
  const handleAddToCart = () => {
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
            <h4 className="product_name"> {product.name} </h4>
            <p>{product.description}</p>
          </figcaption>

          <h4>$ {product.price}</h4>

          <button onClick={handleAddToCart}>
            Añadir al Carrito
          </button>

        </figure>


        <style jsx>{`


          /* * * * * * *   CUSTOM PROPERTIES   * * * * * * */
          figure {
            width: 300px;
            height: 400px;
            border: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 15px;
            text-decoration: none;
            letter-spacing: 0.3px;
            font-weight: normal;
            border-radius: 10px;
            box-shadow: 3px 3px 6px rgba(165, 177, 198, 0.4), -3px -3px 6px rgba(255, 255, 255, 0.8); 
            text-align: center;
            margin: 30px 10px;
          }

          .product_name{
            color: var(--colorPrincipal);
          }

          img {
            width: 280px;
            height: 45%;
            object-fit: cover;
            margin-top: 10px;
            border-radius: 10px;
            transition: transform 0.2s ease-out;
          }

          h4 {
            font-size: 1.4rem;
            font-weight: 900;
            color: var(--colorTexto);
            margin-bottom: 5px;
          }

          p{
            color: var(--colorTexto);
            margin-bottom: 5px;
            padding: 0px 0%;
            text-align: center;
            white-space: pre-wrap;
            height: 50px;
          }

          button{
            align-items: center;
            justify-content: center;
            transition: 0.1s box-shadow ease-in-out;
            cursor: pointer;
            border-radius: 10px;
            font-weight: normal;
            box-shadow: -3px -3px 6px 0px #fff9, -2px -2px 2px 0px #fff9,
              3px 3px 6px 0px #0001, 2px 2px 2px 0px #0001, inset 0px 0px 0px 0px #fff9,
              inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
              inset 0px 0px 0px 0px #0001;
            border: none;
            color: #a5b1c6;
            opacity: 0.8;
            font-size: 18px;
            padding: 10px 20px;
            margin-bottom: 20px;
          }

          button:hover {
            transform: translateY(2px);
            box-shadow: none;
          }

          button:active{
            box-shadow: 0px 0px 0px 0px #fff9, 0px 0px 0px 0px #fff9,
            0px 0px 0px 0px #0001, 0px 0px 0px 0px #0001, inset -3px -3px 6px 0px #fff9,
            inset -3px -3px 4px 0px #fff9, inset 3px 3px 6px 0px #0003,
            inset 3px 3px 4px 0px #0001;
            color: #a5b1c6;
            opacity: 1;
            font-size: 15px;
          }

          /* Extra small devices (phones, 600px and down) */
          @media only screen and (max-width: 600px) {
            
            figure{ 
              width: 225px; 
              height: 350px;
              margin: 15px 0px;
            }

            img {width: 90%; margin-bottom: 10px;}

            p {height: 45px; margin-bottom: 0px;}

            button{font-size: 15px;}

            h4 {
              font-size: 1.2rem;
              font-weight: 900;
            }

            button{
              font-size: 16px;
              padding: 10px 20px;
            }

          }

        `}</style>
    </>
  )
}

export default Card