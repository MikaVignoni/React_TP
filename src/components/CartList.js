import { ShoppingContext } from "../context/ShoppingContextProvider"
import { useContext, useEffect } from "react";

function Shopping() {
  
  const {db, READ_DATA, DELETE_ITEM_IN_CART} = useContext(ShoppingContext);
  useEffect(() => {READ_DATA()}, []);
  const {products, cart} = db; 

  console.log(products)
  console.log(cart)




  return (
    <>

      <h2>CARRITO DE COMPRAS</h2>
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
                <tr key={index}>
                    <th scope="row">
                        <img  key= {item.id} src={item.img[0]} width="50px" alt={item.name} />
                    </th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td> {parseInt(item.price, 10)*parseInt(item.qty, 10)}</td>
                </tr>) 
            }
        </tbody>
        </table>
        {/* )} */}
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

