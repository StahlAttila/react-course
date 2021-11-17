import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  visible: true,
};

//normally we should mutate state object, but because of redux toolkit, it provides use
//a cloned state object, so we are not actually directly mutate it
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.visible = !state.visible;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;