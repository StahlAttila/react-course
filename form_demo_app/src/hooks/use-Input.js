import { useReducer, useState } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if(action.type === "UPDATE_INPUT") {
    const newState = {...state, value: action.value};
    return newState;
  } else if(action.type === "WAS_TOUCHED") {
    const newState = {...state, isTouched: true};
    return newState;
  } else if(action.type === "RESET") {
    return initialState;
  }

  return initialState;
};

//The commented out elements are part of a previous solution with useState, which in this scenario would be
//completly fine, the useReducer is unnecessary, only for practicing.

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  // const [input, setInput] = useState("");
  // const [inputTouched, setInputTouched] = useState(false);

  // const enteredInputIsValid = validate(input);
  // const inputIsInvalid = !enteredInputIsValid && inputTouched;

  const enteredInputIsValid = validate(inputState.value);
  const inputIsInvalid = !enteredInputIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    // setInput(event.target.value);
    dispatch({type: "UPDATE_INPUT", value: event.target.value});
  };

  const inputBlurHandler = () => {
    // setInputTouched(true);
    dispatch({type: "WAS_TOUCHED"});
  };

  const resetInput = () => {
    // setInput("");
    // setInputTouched(false);
    dispatch({type: "RESET"});
  };

  return {
    input: inputState.value,
    inputIsInvalid,
    enteredInputIsValid,
    inputBlurHandler,
    inputChangeHandler,
    resetInput,
  };
};

export default useInput;
