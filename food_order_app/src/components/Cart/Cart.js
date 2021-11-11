import React, { useContext, useState } from "react";
import CartContext from "../../store/cartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const orderHandler = () => {
    setShowCheckoutForm(true);
  };

  const onCancelHandler = () => {
    setShowCheckoutForm(false);
    props.onHide();
  };

  const onCancelForm = () => {
    setShowCheckoutForm(false);
  };

  const onConfirmOrder = () => {
  }

  const hasItem = cartItems.length > 0;

  const modalActions = 
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onCancelHandler}>Close</button>
      {hasItem && (
      <button className={classes.button} onClick={orderHandler}>Order</button>)}
    </div>

  return (
    <Modal onClick={props.onHide}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckoutForm && <CheckoutForm onCancel={onCancelForm} onConfirm={onConfirmOrder}/>}
      {!showCheckoutForm && modalActions}
    </Modal>
  );
};

export default Cart;
