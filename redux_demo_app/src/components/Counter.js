import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const { counter, visible } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: "INCREASE", amount: 5 });
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_ID, payload:10}
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE_VISIBILITY"})
    dispatch(counterActions.toggleCounter());
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
