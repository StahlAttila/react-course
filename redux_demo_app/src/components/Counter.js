import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const { counter, visible } = useSelector((state) => state);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const increaseHandler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE_VISIBILITY"})
  };

  const counterComponent = (
    <React.Fragment>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </React.Fragment>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && counterComponent}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
