import React from "react";
import Banner from "../Banner/Banner";
import ViewCard from "../projectCard/ViewCard";
import styles from "./Oddstyle.module.css";
import Button from "../Button/Button";
import Table from "./Table";

function OddComponent() {
  return (
    <div>
      <Banner
        text="Claim and keep Track of Rewards"
        image="/svgs/RewardBanner.svg"
      />
      <div className={styles.view_cont}>
        <ViewCard title="Buildpoints" id="1" />
        <ViewCard description1="1" title="Contribution Rewards" id="2" />
        <ViewCard description2="2" title="Referrals" id="3" />
      </div>
      <div className={styles.last_Cont}>
        <Button
          type="link"
          text="Leather Board"
          color="var(--primary-color)"
          path="#"
        />
        <Table />
      </div>
    </div>
  );
}

export default OddComponent;
