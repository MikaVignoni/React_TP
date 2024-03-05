import { ShoppingContext } from "../context/ShoppingContextProvider"
import { useContext, useEffect } from "react";
import CartItem from "./CartItem";

function Shopping() {
  
  const {db, READ_DATA, DELETE_ITEM_IN_CART, ADD_ITEM_TO_CART, DELETE_ONE_ITEM_IN_CART} = useContext(ShoppingContext);
  useEffect(() => {READ_DATA()}, []);
  const {cart} = db; 

  return (
    <>
      <div >
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Producto</th>
            <th scope="col"></th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {cart.map( (item, index) =>
              <CartItem key={index} item={item} DELETE_ITEM_IN_CART={DELETE_ITEM_IN_CART} ADD_ITEM_TO_CART={ADD_ITEM_TO_CART} DELETE_ONE_ITEM_IN_CART={DELETE_ONE_ITEM_IN_CART} /> 
            )}

        </tbody>
        </table>
      </div>


    

      <style jsx>{`
        /* * * * * * *   CUSTOM PROPERTIES   * * * * * * */
        .cards_container {
          display: flex;
          flex-flow: row;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
        }

      `}</style>
    </>
  )
}

export default Shopping

