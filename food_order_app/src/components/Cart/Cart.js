import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
];

const Cart = (props) => {
  const { result } = DUMMY_MEALS.reduce((a, b) => ({
    result: a.price + b.price,
  }));

  const totalAmount = `$${result.toFixed(2)}`;

  const cartItems = DUMMY_MEALS.map((cartItem) => <li>{cartItem.name}</li>);

  const orderHandler = () => {
    console.log("Ordering");
    props.onHide();
  }

  return (
    <Modal onClick={props.onHide}>
        <ul className={classes["cart-items"]}>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
          <button className={classes.button} onClick={orderHandler}>Order</button>
        </div>
    </Modal>
  );
};

export default Cart;
