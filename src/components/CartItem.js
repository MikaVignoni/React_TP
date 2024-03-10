// import Trash from "./icons/Trash";


// function CartItem(props) {
//   const {item,DELETE_ITEM_IN_CART, ADD_ITEM_TO_CART, DELETE_ONE_ITEM_IN_CART} = props;
  
  
//   const handleAddOne = () => ADD_ITEM_TO_CART(item.id);

//   const handleDeleteOne = () => {
//     if (parseInt(item.qty, 10) > 1) { 
//       DELETE_ONE_ITEM_IN_CART(item.id);
//     } else { 
//       const isConfirmed = window.confirm("Quieres eliminar el item del carrito?");
//       if (isConfirmed) { DELETE_ITEM_IN_CART(item.id); }
//     }
//   };
  
//   const handleDeleteAll = () => {
//     const isConfirmed = window.confirm(  `Quieres eliminar el item del carrito?` );
//     if (isConfirmed) { DELETE_ITEM_IN_CART(item.id); }
//   };

  

//   return ( <>
//     <tr>
//       <th scope="row">
//         <img src={item.img[0]} alt={item.name} />
//       </th>

//       <td>{item.name}</td>

//       <td>{item.price}</td>

//       <td>
//         <button onClick={handleDeleteOne}>-</button>
//         {item.qty}
//         <button onClick={handleAddOne}>+</button>
//       </td>

//       <td> {parseInt(item.price, 10)*parseInt(item.qty, 10)}</td>

//       <td>
//         <button onClick={handleDeleteAll} className="TrashIcon"><Trash/> </button>
//       </td>

//     </tr>

//     <style jsx>{`
//       figure {
//         width: 250px; 
//         height: 440px;
//         border: none;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         font-size: 15px;
//         text-decoration: none;
//         letter-spacing: 0.3px;   
//         font-weight: normal;
//         border-radius: 10px;
//         box-shadow: 8px 8px 16px rgba(165, 177, 198, 0.8), -8px -8px 16px rgba(255, 255, 255, 0.8); /* (165, 177, 198, 0.7)     rgba(255, 255, 255, 0.99);  celestito rgba(230, 243, 255, 0.9)*/ 
//         text-align: center;
//       }

//       img {
//         width: 80px;
//         object-fit: cover;
//         margin-top: 20px;
//         margin-bottom: 30px;
//         border-radius: 10px;
//         transition: transform 0.2s ease-out;
//       }

//       h3 {
//         font-size: 1.4rem;
//         font-weight: 900;
//         margin-bottom: 30px;
//       }

//       button{
//         align-items: center;
//         justify-content: center;
//         transition: 0.1s box-shadow ease-in-out;
//         cursor: pointer;
//         border-radius: 5px;
//         font-weight: 600;

//         box-shadow: -2px -2px 2px 0px #fff9, -2px -2px 2px 0px #fff9, 2px 2px 2px 0px #0001, 2px 2px 2px 0px #0001;
//         border: none;

//         color: var(--colorTexto);
//         opacity: 0.8;
//         font-size: 14px;
//         width: 30px;
//         height: 30px;
//         margin: 0px 10px;
//       }

//       button:hover {
//         transform: translateY(1px);
//         box-shadow: none; 
//       }

//       button:active{
//         box-shadow:inset -2px -2px 3px 0px #fff9,
//         inset -2px -2px 3px 0px #fff9, inset 2px 2px 3px 0px #0003,
//         inset 2px 2px 3px 0px #0001;
//         color: #a5b1c6;
//         opacity: 1;
//         font-size: 10px;
//       }

//       .TrashIcon{
//         width: 45px;
//         height: 45px;
//         align-items: center;
//         justify-content: center;
//         transition: 0.1s box-shadow ease-in-out;
//         cursor: pointer;
//         font-weight: 600;

//         box-shadow: none;
//         border: none;

//         color: var(--colorTexto);
//         font-size: 14px;
//         width: 30px;
//         height: 30px;
//         margin: 0px 10px;
//         background: none;
//       }

//       .TrashIcon:active{
//         box-shadow: none;
//         opacity: 1;
//         font-size: 10px;
//         color: var(--colorTexto);
//       }

//       .TrashIcon:hover {color: var(--colorPrincipal); }

//       /* Extra small devices (phones, 600px and down) */
//       @media only screen and (max-width: 600px) {

//         figure { width: 200px; height: 300px; }
//         img { width: 75%; margin-bottom: 20px; }
//         button{ font-size: 15px; }


//       h3 {
//         font-size: 1.4rem;
//         font-weight: 900;
//         margin-bottom: 30px;
//       }


//       button{
//         align-items: center;
//         justify-content: center;
//         transition: 0.1s box-shadow ease-in-out;
//         cursor: pointer;
//         border-radius: 10px;
//         font-weight: normal;

//         box-shadow: -8px -8px 20px 0px #fff9, -6px -6px 6px 0px #fff9,
//           8px 8px 20px 0px #0001, 5px 5px 6px 0px #0001, inset 0px 0px 0px 0px #fff9,
//           inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
//           inset 0px 0px 0px 0px #0001;
//         border: none;

//         color: #a5b1c6;
//         opacity: 0.8;
//         font-size: 18px;
//         padding: 10px 20px;
//       }

//       }

//     `}</style>
//   </> )
//   }
  
//   export default CartItem