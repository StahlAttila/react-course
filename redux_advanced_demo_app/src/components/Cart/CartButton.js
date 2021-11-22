import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

import { UIActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  let totalItems = 0;

  if(cartItems.length > 0) {
    totalItems = cartItems.map((cartItem) => cartItem.quantity).reduce((prev, next) => prev + next);
  }

  const cartClickHandler = () => {
    dispatch(UIActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
