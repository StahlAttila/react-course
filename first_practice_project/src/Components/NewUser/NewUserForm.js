import React, { useState, useRef } from "react";
import { Fragment } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();
  // const [username, setUsername] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
 
  // const usernameChangeHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const userAgeChangeHandler = (event) => {
  //   setUserAge(event.target.value);
  // };

  const submitHandler = () => {
    const enteredName = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Username and age must not be empty!'
      });
      return;
    }

    if (Number.parseInt(enteredAge) < 0) {
      setError({
        title: 'Invalid age',
        message: 'Age must be a positive number!'
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: Number.parseInt(enteredAge),
    };
    props.addUser(newUser);
    // setUserAge("");
    // setUsername("");
    //usually we should manipulate dom elements, it should be done by react
    usernameInputRef.current.value= '';
    ageInputRef.current.value= '';

  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input
            type="text"
            // value={username}
            // onChange={usernameChangeHandler}
            ref={usernameInputRef}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input
            type="number"
            // value={userAge}
            // onChange={userAgeChangeHandler}
            ref={ageInputRef}
          />
        </div>
        <Button onClick={submitHandler} label="Add User" />
      </Card>
    </Fragment>
  );
};

export default NewUserForm;
