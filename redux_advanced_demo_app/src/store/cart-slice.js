import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      let itemToAdd = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemToAdd) {
        itemToAdd.quantity++;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(newItem);
      }
      state.isChanged = true;
    },
    removeItem(state, action) {
      let itemToRemoveIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemToRemoveIndex].quantity > 1) {
        state.cartItems[itemToRemoveIndex].quantity--;
      } else {
        state.cartItems.splice(itemToRemoveIndex, 1);
      }
      state.isChanged = true;
    },
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
