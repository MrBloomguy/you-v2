import React from "react";
import styles from "./Button.module.css";
function Button({ text }) {
  return (
    <button className={styles.btn} onClick={console.log("Alaa Ayaad")}>
      {text}
    </button>
  );
}

export default Button;
