
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
        <ul className="table table-hover  align-middle text-center">
            {cart.map( (item, index) => 
                <CartListItem key={index} item={item} DELETE_ITEM_IN_CART={DELETE_ITEM_IN_CART} ADD_ITEM_TO_CART={ADD_ITEM_TO_CART} DELETE_ONE_ITEM_IN_CART={DELETE_ONE_ITEM_IN_CART} /> 
            )}
        </ul>


      <style jsx>{`
        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0px;
        }
        
        span{
          font-weight: 600;
        }
      `}</style>
    
    </>
  )
}

export default YourCart

