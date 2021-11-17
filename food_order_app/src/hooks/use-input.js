import { useState } from "react";

const useInput = (validation) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredInputIsValid = validation(input);
  const inputIsInvalid = !enteredInputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setIsTouched(true);
    setInput(event.target.value);
  }

  const isTouchedChangeHandler = (value) => {
    setIsTouched(value);
  }

  const reset = () => {
    setInput("");
    setIsTouched(false);
  }

  return { 
    input,  
    enteredInputIsValid,
    inputIsInvalid,
    inputChangeHandler,
    isTouchedChangeHandler,
    reset,
  }

};

export default useInput;
