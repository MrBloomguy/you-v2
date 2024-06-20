import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import React from "react";
import styles from "./rewards.module.css";
function page() {
  return (
    <div >
      <Banner
        text="Vote for your favurite project"
        image="/svgs/RewardBanner.svg"
      />
      <div className={styles.divide__Cont}>
        <Card />
        <div></div>
      </div>
    </div>
  );
}

export default page;
