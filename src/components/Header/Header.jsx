import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
function Header() {
  return (
    <header className={styles.header__cont}>
      <div className={styles.input__cont}>
        <input
          type="text"
          placeholder="Search for projects"
          suppressHydrationWarning={true}
        />
        <img
          className={styles.icon__search}
          src="/svgs/Search.svg"
          alt="Search"
        />
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
          <ConnectButton/>
        </div>
      </div>
    </header>
  );
}

export default Header;
