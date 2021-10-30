import React, { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
 
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = () => {
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Username and age must not be empty!'
      });
      return;
    }

    if (Number.parseInt(userAge) < 0) {
      setError({
        title: 'Invalid age',
        message: 'Age must be a positive number!'
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: username,
      age: Number.parseInt(userAge),
    };
    props.addUser(newUser);
    setUserAge("");
    setUsername("");
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input
            type="number"
            value={userAge}
            onChange={userAgeChangeHandler}
          />
        </div>
        <Button onClick={submitHandler} label="Add User" />
      </Card>
    </div>
  );
};

export default NewUserForm;
