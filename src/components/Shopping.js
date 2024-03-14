import { ShoppingContext } from "../context/ShoppingContextProvider"
import { useContext, useState, useEffect } from "react";
import Card from "./Card";

function Shopping() {
  
  const {db, READ_DATA, ADD_ITEM_TO_CART} = useContext(ShoppingContext);
  useEffect(() => {READ_DATA()}, []);
  const {products, cart} = db; 

  return ( <>
    <div className="cards_container">
      {
        products.map( (product, index) => <Card key={index} product={product} ADD_ITEM_TO_CART={ADD_ITEM_TO_CART} />) 
      }
    </div>

    <style jsx>{`
      .cards_container {
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
      }
    `}</style>
    
  </> )
}

export default Shopping