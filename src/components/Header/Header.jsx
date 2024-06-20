import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
function Header() {
  return (
    <header className={styles.header__cont}>
      <div className={styles.input__cont}>
        <input type="text" placeholder="Search for projects" />
        <img className={styles.icon__search} src="/svgs/Search.svg" alt="Search" />
      </div>
      <div className={styles.divide}>
        <div className="cart">
          <img src="/svgs/Cart.svg" alt="Cart" />
        </div>
        <div className="Notification">
          <img src="/svgs/Notifications.svg" alt="notifications" />
        </div>
        <div className="flex">
          <img className={styles.avatar} src="/profile.jpeg" alt="user" />
          <img src="/svgs/Arrow.svg" alt="arrow" />
        </div>
        <div className="wallet">
          <Button text="Connect Wallet" />
        </div>
      </div>
    </header>
  );
}

export default Header;
