import React from "react";
import useInput from "../../hooks/use-input";
import classes from "./CheckoutForm.module.css";

const isTextValid = (text) => {
  return text.trim() !== "";
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isFourLong = (value) => {
  return value.trim().length === 4;
};

const CheckoutForm = (props) => {
  const {
    input: name,
    enteredInputIsValid: enteredNameIsValid,
    inputIsInvalid: nameIsInvalid,
    inputChangeHandler: nameChangeHandler,
    isTouchedChangeHandler: nameTouchedHandler,
    reset: resetName,
  } = useInput(isTextValid);

  const {
    input: email,
    enteredInputIsValid: enteredEmailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    isTouchedChangeHandler: emailTouchedHandler,
    reset: resetEmail,
  } = useInput(isEmailValid);

  const {
    input: phoneNumber,
    enteredInputIsValid: enteredPhoneNumberIsValid,
    inputIsInvalid: phoneNumberIsInvalid,
    inputChangeHandler: phoneNumberChangeHandler,
    isTouchedChangeHandler: phoneNumberTouchedHandler,
    reset: resetPhoneNumber,
  } = useInput(isTextValid);

  const {
    input: street,
    enteredInputIsValid: enteredStreetIsValid,
    inputIsInvalid: streetIsInvalid,
    inputChangeHandler: streetChangeHandler,
    isTouchedChangeHandler: streetTouchedHandler,
    reset: resetStreet,
  } = useInput(isTextValid);

  const {
    input: city,
    enteredInputIsValid: enteredCityIsValid,
    inputIsInvalid: cityIsInvalid,
    inputChangeHandler: cityChangeHandler,
    isTouchedChangeHandler: cityTouchedHandler,
    reset: resetCity,
  } = useInput(isTextValid);

  const {
    input: zipCode,
    enteredInputIsValid: enteredZipCodeIsValid,
    inputIsInvalid: zipCodeIsInvalid,
    inputChangeHandler: zipCodeChangeHandler,
    isTouchedChangeHandler: zipCodeTouchedHandler,
    reset: resetZipCode,
  } = useInput(isFourLong);

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: name,
      email: email,
      phone: phoneNumber,
      city: city,
      street: street,
      zipCode: zipCode
    });

    resetName();
    resetEmail();
    resetZipCode();
    resetPhoneNumber();
    resetCity();
    resetStreet();
  };

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredPhoneNumberIsValid &&
    enteredEmailIsValid &&
    enteredStreetIsValid &&
    enteredCityIsValid &&
    enteredZipCodeIsValid
  ) {
    formIsValid = true;
  }

  const nameClasses = nameIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const emailClasses = emailIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const phoneNumberClasses = phoneNumberIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const cityClasses = cityIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const streetClasses = streetIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const zipCodeClasses = zipCodeIsInvalid
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={classes.rowContainer}>
        <div className={nameClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameTouchedHandler}
          />
          {nameIsInvalid && <p>Name must not be empty!</p>}
        </div>
        <div className={emailClasses}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailTouchedHandler}
          />
          {emailIsInvalid && <p>Email must be valid!</p>}
        </div>
      </div>
      <div className={classes.rowContainer}>
        <div className={phoneNumberClasses}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            value={phoneNumber}
            onChange={phoneNumberChangeHandler}
            onBlur={phoneNumberTouchedHandler}
          />
          {phoneNumberIsInvalid && <p>Phone number must not be empty!</p>}
        </div>
        <div className={streetClasses}>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={streetChangeHandler}
            onBlur={streetTouchedHandler}
          />
          {streetIsInvalid && <p>Street must not be empty!</p>}
        </div>
      </div>
      <div className={classes.rowContainer}>
        <div className={cityClasses}>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={cityChangeHandler}
            onBlur={cityTouchedHandler}
          />
          {cityIsInvalid && <p>City must not be empty!</p>}
        </div>
        <div className={zipCodeClasses}>
          <label htmlFor="zip">Zip Code</label>
          <input
            id="zip"
            type="text"
            value={zipCode}
            onChange={zipCodeChangeHandler}
            onBlur={zipCodeTouchedHandler}
          />
          {zipCodeIsInvalid && <p>Zip code must be 4 digits long!</p>}
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
