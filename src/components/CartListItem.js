import Trash from "./icons/Trash";


function CartListItem(props) {
  const {item,DELETE_ITEM_IN_CART, ADD_ITEM_TO_CART, DELETE_ONE_ITEM_IN_CART} = props;
  
  
  const handleAddOne = () => ADD_ITEM_TO_CART(item.id);

  const handleDeleteOne = () => {
    if (parseInt(item.qty, 10) > 1) { 
      DELETE_ONE_ITEM_IN_CART(item.id);
    } else { 
      const isConfirmed = window.confirm("Quieres eliminar el item del carrito?");
      if (isConfirmed) { DELETE_ITEM_IN_CART(item.id); }
    }
  };
  
  const handleDeleteAll = () => {
    const isConfirmed = window.confirm(  `Quieres eliminar el item del carrito?` );
    if (isConfirmed) { DELETE_ITEM_IN_CART(item.id); }
  };


  return ( <>
    <li> 
        <img src={item.img[0]} alt={item.name} />
        
        <div>
            <span className="ProductName"> {item.name} </span>
            <div className="Qty">
                <button onClick={handleDeleteOne}>-</button>
                <span className="ItemQty">{item.qty} </span>
                <button onClick={handleAddOne}>+</button>
            </div>
        </div>

        <span className="ItemPrice">$ {item.price}</span>
        
        <span className="SubTotalPrice">$ {parseInt(item.price, 10)*parseInt(item.qty, 10)}</span>

        <button onClick={handleDeleteAll} className="TrashIcon">
            <Trash />
        </button>
    
    </li>





    <style jsx>{`
        li{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        } 

        img{
            width: 20%;
            max-width: 82px;
        }
        .ItemQty{ padding: 0px 5px; }

        .ProductName{
            width: 30%; /* En el Responsive puede bajar a 25% y darle 5% a Amount */
            text-align: left;
            padding-left: 20px;
        }

        .ItemPrice,
        .SubTotalPrice{ width: 10%; }

        img {
            max-height: 90px;
            object-fit: cover;
            margin: 5px 10px;
            border-radius: 10px;
        }

        button{
            align-items: center;
            justify-content: center;
            transition: 0.1s box-shadow ease-in-out;
            cursor: pointer;
            border-radius: 5px;
            font-weight: 600;

            box-shadow: -2px -2px 2px 0px #fff9, -2px -2px 2px 0px #fff9, 2px 2px 2px 0px #0001, 2px 2px 2px 0px #0001;
            border: none;

            color: var(--colorTexto);
            font-size: 16px;
            width: 30px;
            height: 30px;
            margin: 0px 10px;
            padding: 0px;
        }

        button:hover {
            transform: translateY(1px);
            box-shadow: none; 
        }

        button:active{
            box-shadow:inset -2px -2px 3px 0px #fff9, inset -2px -2px 3px 0px #fff9, inset 2px 2px 3px 0px #0003, inset 2px 2px 3px 0px #0001;
            color: #a5b1c6;
            opacity: 1;
            font-size: 10px;
        }


        .TrashIcon{
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
            transition: 0.1s box-shadow ease-in-out;
            cursor: pointer;

            box-shadow: none;
            border: none;

            margin: 0px 20px;
            background: none;
        }

        .TrashIcon:active{
            box-shadow: none;
            opacity: 1;
            color: var(--colorPrincipal);
        }

        .TrashIcon:hover {color: var(--colorPrincipal); }


        //* RESPONSIVE 700px o menos el tacho se achica a 35px y margin: 0px 5px*//

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
            .ItemPrice {visibility: hidden;}
            img{
                width: 15%;
                max-width: 82px;
            }

            
            .Qty{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }


            h3 {
                font-size: 1.4rem;
                font-weight: 900;
                margin-bottom: 30px;
            }

            span{
                font-size: 12px;
            }


            button{
                align-items: center;
                justify-content: center;
                transition: 0.1s box-shadow ease-in-out;
                border-radius: 10px;

                color: #a5b1c6;
                font-size: 12px;
                padding: 5px 5px;
            }

        }
    `}</style>

    
  </> )
  }
  
  export default CartListItem







   