import { UIActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

//action creator, so we dont store all this logic in the components
//thunk -> just a function that returns a function that will be called later
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UIActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://food-order-app-82eb9-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({cartItems: cart.cartItems}),
        }
      );

      if (!response.ok) {
        throw new Error("Send cart data failed!");
      }
    };

    try {
      sendRequest();
      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully sent cart data!",
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://food-order-app-82eb9-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData || {cartItems: []}));
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};
