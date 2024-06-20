import React from "react";
import Button from "../Button/Button";
import styles from "./card.module.css";
function Card() {
  return (
    <div className={styles.card__cont}>
      <div className={styles.row__one}>
        <div className={styles.ava__cont}>
          <img src="/profile.jpeg" alt="ava" />
          <h2>GAMEION</h2>
        </div>
        <div className={styles.right__cont}>
          <p>12 March 2050</p>
          <button>
            Grant $400
            <span>(20%)</span>
          </button>
        </div>
      </div>
      <div className={styles.row__two}>
        <h4>Milestone Description:</h4>
        <p>
          Defi Promises to Revolutionize how People engage in economic
          activities. in the web 3 space.
        </p>
      </div>
      <div className={styles.row__three}>
        <Button text="For" />
        <Button text="Against" />
      </div>
    </div>
  );
}

export default Card;
