import { ShoppingContext } from "../context/ShoppingContextProvider"
import { useContext, useEffect } from "react";
import CartListItem from "./CartListItem";

function YourCart() {
  
  const {db, READ_DATA, DELETE_ITEM_IN_CART, ADD_ITEM_TO_CART, DELETE_ONE_ITEM_IN_CART, infoCartState} = useContext(ShoppingContext);
  useEffect(() => {READ_DATA()}, []);
  const {cart} = db;
  const { TotalCartPrice } = infoCartState

    return ( <>
        <ul>
            <hr />
            <li>
                <span className="Title-Img">-</span>
                <span className="Title-Product">Producto</span>
                <span className="Title-Qty">Cantidad</span>
                <span className="Title-Price">Precio</span>
                <span className="Title-Subtotal">SubTotal</span>
                <span className="Title-Delete">-</span>
            </li>
            <hr />

            {cart.map( (item, index) => 
                <CartListItem key={index} item={item} DELETE_ITEM_IN_CART={DELETE_ITEM_IN_CART} ADD_ITEM_TO_CART={ADD_ITEM_TO_CART} DELETE_ONE_ITEM_IN_CART={DELETE_ONE_ITEM_IN_CART} /> 
            )}
            
            <hr />
            <div className="Comprar">
                <span className="Total">TOTAL: ${TotalCartPrice}</span>  
                <button>Comprar</button>         
            </div>     
            <hr />
        </ul>
        


        <style jsx>{`
            ul {display: flex; flex-direction: column; justify-content: space-between; align-items: center; width: 100%; padding: 0px; }
            li {width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin: 0px; text-align: center;}

            .Title-Img {display: none;}
            .Title-Product {width: 15%; max-width: 55px;}
            .Title-Qty {width:40vw;}
            .Title-Price {display: none;}
            .Title-Subtotal {width:10vw; min-width: 65px;}
            .Title-Delete {width: 30px; visibility: hidden;}
            .Comprar{width: 95%;  display: flex; flex-direction: column; justify-content: space-evenly; text-align: center; align-items: center;}
            .Total {width: 100%; margin: 15px 0px; }
            button {width: 100%; max-width: 400px; margin: 25px 0px; padding: 10px; border: none; background-color: var(--colorDetalles); font-weight: bold; font-size: 16px;}
            button:hover{ background-color: var(--colorPrincipal); }


            @media (min-width: 650px) {
                .Title-Product {width: 20%; max-width: 82px;}
                .Title-Price {display:inline; width:10vw; min-width: 65px;} 
                .Comprar{flex-direction: row;}
            }

            @media (min-width: 800px) {
                .Title-Img {width: 82px; display:inline; visibility: hidden;}
                .Title-Product {min-width:250px; text-align: left; padding-left: 10px;}
                .Title-Qty {width:100px; }
                .Title-Delete {width: 35px; }
            }
        `}</style>
    
    </>)
}

export default YourCart