import React, { useReducer } from "react";
import CartContext from "./cartContext";
import { cartReducer } from "./reducers/cartReducer";

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR"});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider
      value={cartContext}
      onAddItem={addItemToCartHandler}
      onRemoveItem={removeItemFromCartHandler}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
