import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";
function Button({ text, type, path }) {
  if (type) {
    return (
      <Link
        className={styles.btn}
        href={path}
        style={{ height: "40px", padding: "10px 32px" }}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={console.log("Alaa Ayaad")}>
        {text}
      </button>
    );
  }
}

export default Button;
