import { createContext, useState } from 'react';
import axios from 'axios';

export const ShoppingContext = createContext ()

const initialDb = { 
  products: [
    {
      id: "0",
      img: [
        "/img/Shopping/Cama_Nido_1.webp",
        "/img/Shopping/Cama_Nido_2.webp"
      ],
      name: "Cama Nido",
      price: 30000
    },
    {
      id: 1,
      img: [
        "/img/Shopping/Collar_Rosa_1.webp",
        "/img/Shopping/Collar_Rosa_2.webp"
      ],
      name: "Collar Rosa",
      price: 3000
    }
  ],
  cart: [{
    id: "000",
    img: ["/img/Huella/Huellitas_Icon.png"],
    name: "LOADING CART...",
    price: 1
  }]
};

const ItemsInCart = 0;
const TotalCartPrice = 0;

const ENDPOINTS = {
    products: `http://localhost:5000/products`,
    cart: `http://localhost:5000/cart`
}

const ShoppingContextProvider = (props) => {

  const [db, setDb] = useState (initialDb);
  const {products, cart} = db; 

  const READ_DATA = async () => {
    const responseProducts = await axios.get(ENDPOINTS.products), 
      responseCart = await axios.get(ENDPOINTS.cart);

    const productsList = await responseProducts.data,
      cartList = await responseCart.data;

    const data = {
        products: productsList,
        cart: cartList,
    };

    setDb(data)

  };

  const CREATE_ITEM_IN_CART = async (item) => {
    const newItem = {...item, qty: item.qty = 1 }

    const OPTIONS = {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      data: JSON.stringify(newItem)
    }

    const ENDPOINT = ENDPOINTS.cart
    await axios(ENDPOINT, OPTIONS);

    READ_DATA();
  };

  const UPDATE_ITEM_IN_CART = async (itemIsInCart) => {
    let id = itemIsInCart.id;
    itemIsInCart.qty = itemIsInCart.qty + 1;

    const OPTIONS = {
      method: "PUT",
      headers: { "Content-Type" : "application/json" },
      data: JSON.stringify(itemIsInCart)  // TO CHECK! quiero almacenar el dato como numero, no como string
    }

    const ENDPOINT = `${ENDPOINTS.cart}/${itemIsInCart.id}`
    console.log(ENDPOINT)
    await axios(ENDPOINT , OPTIONS);

    READ_DATA();
  };

  const ADD_ITEM_TO_CART = async (idSelected) => {
    const item = db.products.find(product => product.id === idSelected);
    if (!item) { console.log("Error - Item Selected Doesn't Exist")}
    else {
      const itemIsInCart = db.cart.find(item => item.id === idSelected)
      itemIsInCart
        ? UPDATE_ITEM_IN_CART(itemIsInCart) // si existe el item tengo q hacer un update con PUT >> llamar a update_item_in_cart
        : CREATE_ITEM_IN_CART(item); // si no existe el item tengo q hacer un POST >> llamar a CREATE_ITEM_IN_CART
      }
  };

  const DELETE_ITEM_IN_CART = async (idSelected) => {
    const itemToDelete = db.cart.find(item => item.id === idSelected)
    if (!itemToDelete) { console.log("Error - Card Selected Doesn't Exist")}
    else {
      let id = itemToDelete.id;
      
      const OPTIONS = {
        method: "DELETE",
        headers: { "Content-Type" : "application/json" },
      }

      const ENDPOINT = `${ENDPOINTS.cart}/${id}`
      await axios(ENDPOINT , OPTIONS);
    };

    READ_DATA();
  };


  const DELETE_ONE_ITEM_IN_CART = async (idSelected) => {
    const itemToDelete = db.cart.find(item => item.id === idSelected)
    if (!itemToDelete) { console.log("Error - Card Selected Doesn't Exist")}
    else {
      let id = itemToDelete.id;
      itemToDelete.qty = itemToDelete.qty - 1;
      
      const OPTIONS = {
        method: "PUT",
        headers: { "Content-Type" : "application/json" },
        data: JSON.stringify(itemToDelete) 
      }

      const ENDPOINT = `${ENDPOINTS.cart}/${id}`
      await axios(ENDPOINT , OPTIONS);
    };

    READ_DATA();
  };

  const value = {db, READ_DATA, ADD_ITEM_TO_CART, DELETE_ITEM_IN_CART, DELETE_ONE_ITEM_IN_CART, ItemsInCart, TotalCartPrice};

  return (
    <ShoppingContext.Provider value = {value} >
        {props.children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContextProvider





// import { createContext, useState } from 'react';
// import axios from 'axios';

// export const ShoppingContext = createContext ()

// const initialDb = { 
//   products: [
//     {
//       id: "0",
//       img: [
//         "/img/Shopping/Cama_Nido_1.png",
//         "/img/Shopping/Cama_Nido_2.png"
//       ],
//       name: "Cama Nido",
//       price: 30000
//     },
//     {
//       id: 1,
//       img: [
//         "/img/Shopping/Collar_Rosa_1.png",
//         "/img/Shopping/Collar_Rosa_2.png"
//       ],
//       name: "Collar Rosa",
//       price: 3000
//     }
//   ],
//   cart: [{
//     id: "000",
//     img: ["/img/Shopping/Cama_Nido_1.png"],
//     name: "TEST CART",
//     price: 333
//   }]
// };

// const ENDPOINTS = {
//     products: `http://localhost:5000/products`,
//     cart: `http://localhost:5000/cart`
// }

// const ShoppingContextProvider = (props) => {

//   const [db, setDb] = useState (initialDb);
//   const {products, cart} = db; 

//   const READ_DATA = async () => {
//     const responseProducts = await axios.get(ENDPOINTS.products), 
//       responseCart = await axios.get(ENDPOINTS.cart);

//     const productsList = await responseProducts.data,
//       cartList = await responseCart.data;

//     const data = {
//         products: productsList,
//         cart: cartList,
//     };

//     setDb(data)

//   };

//   const CREATE_ITEM_IN_CART = async (item) => {
//     const newItem = {...item, qty: item.qty = 1 }

//     const OPTIONS = {
//       method: "POST",
//       headers: { "Content-Type" : "application/json" },
//       data: JSON.stringify(newItem)
//     }

//     const ENDPOINT = ENDPOINTS.cart
//     await axios(ENDPOINT, OPTIONS);

//     READ_DATA();
//   } ;

//   const UPDATE_ITEM_IN_CART = async (itemIsInCart) => {
//     let id = itemIsInCart.id;
//     itemIsInCart.qty = itemIsInCart.qty + 1;

//     const OPTIONS = {
//       method: "PUT",
//       headers: { "Content-Type" : "application/json" },
//       data: JSON.stringify(itemIsInCart)  // TO CHECK! quiero almacenar el dato como numero, no como string
//     }

//     const ENDPOINT = `${ENDPOINTS.cart}/${itemIsInCart.id}`
//     console.log(ENDPOINT)
//     await axios(ENDPOINT , OPTIONS);

//     READ_DATA();
//   } ;

//   const ADD_ITEM_TO_CART = async (idSelected) => {
//     const item = db.products.find(product => product.id === idSelected);
//     if (!item) { console.log("Error - Item Selected Doesn't Exist")}
//     else {
//       const itemIsInCart = db.cart.find(item => item.id === idSelected)
//       itemIsInCart
//         ? UPDATE_ITEM_IN_CART(itemIsInCart) // si existe el item tengo q hacer un update con PUT >> llamar a update_item_in_cart
//         : CREATE_ITEM_IN_CART(item); // si no existe el item tengo q hacer un POST >> llamar a CREATE_ITEM_IN_CART
//       }
//   };

//   const DELETE_ITEM_IN_CART = async (idSelected) => {
//     const itemToDelete = db.cart.find(item => item.id === idSelected)
//     if (!itemToDelete) { console.log("Error - Card Selected Doesn't Exist")}
//     else {
//       let id = itemToDelete.id;
      
//       const OPTIONS = {
//         method: "DELETE",
//         headers: { "Content-Type" : "application/json" },
//       }

//       const ENDPOINT = `${ENDPOINTS.cart}/${id}`
//       await axios(ENDPOINT , OPTIONS);
//     };

//     READ_DATA();
//   };


//   const DELETE_ONE_ITEM_IN_CART = async (idSelected) => {
//     const itemToDelete = db.cart.find(item => item.id === idSelected)
//     if (!itemToDelete) { console.log("Error - Card Selected Doesn't Exist")}
//     else {
//       let id = itemToDelete.id;
//       itemToDelete.qty = itemToDelete.qty - 1;
      
//       const OPTIONS = {
//         method: "PUT",
//         headers: { "Content-Type" : "application/json" },
//         data: JSON.stringify(itemToDelete) 
//       }

//       const ENDPOINT = `${ENDPOINTS.cart}/${id}`
//       await axios(ENDPOINT , OPTIONS);
//     };

//     READ_DATA();
//   };


//   const value = {db, READ_DATA, ADD_ITEM_TO_CART, DELETE_ITEM_IN_CART, DELETE_ONE_ITEM_IN_CART};




//   return (
//     <ShoppingContext.Provider value = {value} >
//         {props.children}
//     </ShoppingContext.Provider>
//   )
// }

// export default ShoppingContextProvider

