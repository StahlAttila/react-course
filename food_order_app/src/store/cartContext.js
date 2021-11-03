import React from "react";

//only need it to have better autocompletion
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) =>{},
  removeItem: (id) => {}
});

export default CartContext;