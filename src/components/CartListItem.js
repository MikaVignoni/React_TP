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
    <li className="CartList"> 
      <img src={item.img[0]} alt={item.name} className="ProductImg"/>

      <span className="ProductNameScreens"> {item.name} </span>
      
      <div className="Name-Qty">
        <span className="ProductName"> {item.name} </span>
        <div className="Qty">
          <button onClick={handleDeleteOne}>-</button>
          <span className="ItemQty">{item.qty} </span>
          <button onClick={handleAddOne}>+</button>
        </div>
      </div>

      <span className="Price">${item.price}</span>
      
      <span className="SubTotalPrice" >${parseInt(item.price, 10)*parseInt(item.qty, 10)}</span>

      <button onClick={handleDeleteAll} className="TrashIcon">
        <Trash />
      </button>
    
    </li>

    <hr />


    <style jsx>{`
      .CartList {width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin: 0px;}

      .ProductImg {width: 15%; max-width: 55px; object-fit: cover;  margin: 0px; border-radius: 10px;}

      .Price {display: none;}

      .Name-Qty { width:40vw; display: flex; flex-direction: column; align-items: center;  justify-content: center;}

      .ProductName {width: 40vw; text-align: left;  padding: 0px; text-align: center; margin: 0px;}

      .Qty {display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 5px 0px;}

      .ItemQty {padding: 0px 5px; text-align: center;}

      span {font-size: 12px; font-weight:400;}

      .SubTotalPrice {width:10vw; min-width: 65px; text-align:center;}

      .TrashIcon {width: 20px; height: 20px; margin: 0px 5px; background: none; box-shadow: none;}

      button {color: var(--colorTexto);  width: 25px; height: 25px; opacity: 0.8; margin: 5px 5px 0px; padding: 0px;}

      .ProductNameScreens {display: none;}


      @media (min-width: 650px) {
        .ProductImg {width:20%; max-width:82px;}
        .Price {display:inline; width:10vw; min-width:65px; text-align:center;}
      }

      @media (min-width: 800px) {
        .ProductImg {width: 82px;}
        span {font-size: 14px;}
        .ProductNameScreens {display:inline; width:250px; text-align:left; padding-left:10px;}
        .ProductName {display:none;}
        .Name-Qty {width:100px; flex-direction:row; justify-content:center;}
        .Qty {width:100px;}

        button {font-size: 16px; width: 30px; height:30px; margin:0px 10px;}
        button:hover {transform:translateY(1px); box-shadow:none;}
        button:active {color: #a5b1c6; opacity:1; font-size:12px; box-shadow:inset -2px -2px 3px 0px #fff9, inset -2px -2px 3px 0px #fff9, inset 2px 2px 3px 0px #0003, inset 2px 2px 3px 0px #0001; }

        .TrashIcon {width: 25px; height: 25px;}
        .TrashIcon:active {box-shadow: none; opacity: 1; color: var(--colorPrincipal);}
        .TrashIcon:hover {color: var(--colorPrincipal); opacity: 1;}
      }


    `}</style>

  </> )
}
  
  export default CartListItem