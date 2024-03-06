import { ShoppingContext } from "../context/ShoppingContextProvider"
import { useContext, useEffect } from "react";
import CartItem from "./CartItem";

function CartList() {
  
  const {db, READ_DATA, DELETE_ITEM_IN_CART, ADD_ITEM_TO_CART, DELETE_ONE_ITEM_IN_CART} = useContext(ShoppingContext);
  useEffect(() => {READ_DATA()}, []);
  const {cart} = db; 

  return (
    <>
      <table className="table table-hover  align-middle text-center">
        <thead class="table-light align-bo">
          <tr>
          <th scope="col" colspan="2">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Subtotal</th>
          <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {cart.map( (item, index) =>
            <CartItem key={index} item={item} DELETE_ITEM_IN_CART={DELETE_ITEM_IN_CART} ADD_ITEM_TO_CART={ADD_ITEM_TO_CART} DELETE_ONE_ITEM_IN_CART={DELETE_ONE_ITEM_IN_CART} /> 
          )}
        </tbody>

        <tfoot>
          <tr>
            <th scope="row" colspan="3"></th>
            <td><span>TOTAL: </span></td>
            <td><span>33</span></td>
            <td></td>
          </tr>
        </tfoot>

      </table>

      <style jsx>{`
        span{
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export default CartList

