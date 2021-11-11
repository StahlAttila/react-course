import React, { useRef } from "react";
import classes from "./CheckoutForm.module.css";

const isEmpty = (value) => {
  return value.trim() !== "";
};
const isFourLong = (value) => {
  return value.trim().length === 4;
};

const CheckoutForm = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const zipInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;

    const enteredNameIsValid = isEmpty(enteredName);
    const enteredEmailIsValid = isEmpty(enteredEmail);
    const enteredPhoneIsValid = isEmpty(enteredPhone);
    const enteredCityIsValid = isEmpty(enteredCity);
    const enteredZipIsValid = isFourLong(enteredZip);
    const enteredStreetIsValid = isEmpty(enteredStreet);

    const formIsValid =
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredZipIsValid &&
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid;

    if (formIsValid) {
      console.log("submitting form");
      return;
    }
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={classes.rowContainer}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" ref={emailInputRef} />
        </div>
      </div>
      <div className={classes.rowContainer}>
        <div className={classes.control}>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" ref={phoneInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input id="street" type="text" ref={streetInputRef} />
        </div>
      </div>
      <div className={classes.rowContainer}>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input id="city" type="text" ref={cityInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="zip">Zip Code</label>
          <input id="zip" type="text" ref={zipInputRef} />
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
