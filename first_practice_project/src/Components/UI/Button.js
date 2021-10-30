import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.label}
    </button>
  );
};

export default Button;
