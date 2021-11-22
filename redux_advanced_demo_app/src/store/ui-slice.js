import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisibility: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartVisibility = !state.cartVisibility;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    },
  },
});

export const UIActions = uiSlice.actions;

export default uiSlice.reducer;