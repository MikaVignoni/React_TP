
import { ShoppingContext } from "../context/ShoppingContextProvider"
import { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import CartListItem from "./CartListItem";

function YourCart() {
  
  const {db, READ_DATA, DELETE_ITEM_IN_CART, ADD_ITEM_TO_CART, DELETE_ONE_ITEM_IN_CART} = useContext(ShoppingContext);
  useEffect(() => {READ_DATA()}, []);
  const {cart} = db; 

  return (
    <>
        <ul>
            <li>
                <span className="Title-Img">-</span>

                <span className="Title-Product">Producto</span>
                <span className="Title-Qty">Cantidad</span>

                <span className="Title-Price">Precio</span>
                <span className="Title-Subtotal">SubTotal</span>
                <span className="Title-Delete">-</span>
            </li>
            {cart.map( (item, index) => 
                <CartListItem key={index} item={item} DELETE_ITEM_IN_CART={DELETE_ITEM_IN_CART} ADD_ITEM_TO_CART={ADD_ITEM_TO_CART} DELETE_ONE_ITEM_IN_CART={DELETE_ONE_ITEM_IN_CART} /> 
            )}
        </ul>


      <style jsx>{`
        ul{ display: flex; flex-direction: column; justify-content: space-between; align-items: center; width: 100%; padding: 0px; }

        li{width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin: 0px; text-align: center;}
        
        .Title-Img{display: none;}
        .Title-Product{width: 15%; max-width: 55px;}
        .Title-Qty{width:40vw;}
        .Title-Price{display: none;}
        .Title-Subtotal{width:10vw; min-width: 65px;}
        .Title-Delete{ width: 30px;}

        span{ font-size: 14px; font-weight: 600; color: var(--colorTextos); }

        @media (min-width: 650px) {
            .Title-Product{width: 20%; max-width: 82px;}
            .Title-Price{ display:inline; width:10vw; min-width: 65px;}             
        }

        @media (min-width: 800px) {
            span{ font-size: 16px;}
            .Title-Img{width: 82px; display:inline;}
            .Title-Product{min-width:250px; text-align: left; padding-left: 10px;}
            .Title-Qty{width:100px; }
            .Title-Delete{width: 35px;}
        }


      /*  span{font-size: 14px;}
            .ProductNameScreens{background:pink; display: inline; width:200px; text-align: left;}
            .ProductName{display: none;}
            .Name-Qty{background:lightGreen; width:100px; flex-direction: row; justify-content: center;}
            .Qty{width:100px;}

            button{font-size: 16px; width: 30px; height: 30px; margin: 0px 10px; }
            button:hover {transform: translateY(1px); box-shadow: none; }

            button:active{
                box-shadow:inset -2px -2px 3px 0px #fff9, inset -2px -2px 3px 0px #fff9, inset 2px 2px 3px 0px #0003, inset 2px 2px 3px 0px #0001;
                color: #a5b1c6;
                opacity: 1;
                font-size: 12px;
            }

            .TrashIcon{ width: 25px; height: 25px; }
         */

      `}</style>
    
    </>
  )
}

export default YourCart

