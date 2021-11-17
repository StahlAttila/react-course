import React, { useContext, useState } from "react";
import CartContext from "../../store/cartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await axios.post(
      "https://food-order-app-82eb9-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        user: userData,
        orderedItems: cartCtx.items,
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const hasItem = cartItems.length > 0;

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onCancelHandler}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckoutForm && (
        <CheckoutForm onCancel={onCancelForm} onConfirm={submitOrderHandler} />
      )}
      {!showCheckoutForm && modalActions}
    </React.Fragment>
  );

  const submittingContent = (
    <React.Fragment>
      <Loader type="TailSpin" color="#8a2b06" height={80} width={80} />
      <p>Sending order...</p>
    </React.Fragment>
  );

  const didSubmitContent = (
    <React.Fragment>
      <p>You order has been sent!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHide}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClick={props.onHide}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && submittingContent}
      {didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
