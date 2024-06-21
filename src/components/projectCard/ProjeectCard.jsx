import React from "react";
import styles from "./Project.module.css";
// import Button from "../Button/Button";
import Link from "next/link";
import Button from "../Button/Button";
import DropDown from "../Dropdown/DropDown";
import SocialIcon from "../Socialicon/SocialIcon";
function ProjeectCard({ image, num, id, red, height, imageHight }) {
  return (
    <div
      className={styles.project_Card_cont}
      style={{ height: height ? height : "", margin: height ? "20px 0" : "" }}
    >
      <div className={styles.image__cont}>
        <img
          src={image}
          alt=""
          className={styles.view}
          style={{ height: imageHight ? imageHight : "" }}
        />
        <div className={styles.tools}>
          <img src="/svgs/proj/tools.svg" alt="" />
        </div>
      </div>
      <div className={styles.first__Row}>
        <h2>GAMEION</h2>
        <div className={styles.brands__cont}>
          <img src="/svgs/proj/Brand1.svg" alt="brand" />
          <img src="/svgs/proj/Brand2.svg" alt="brand" />
          <img src="/svgs/proj/Brand3.svg" alt="brand" />
          <img
            src="/svgs/proj/Share.svg"
            style={{ marginInlineStart: "8px" }}
            alt="brand"
          />
        </div>
      </div>

      {height ? (
        <p className={styles.description} style={{ margin: "25px auto" }}>
          Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE
          Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE
          Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE
          Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE
          Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE
        </p>
      ) : (
        <p className={styles.description}>
          Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE
        </p>
      )}

      <div
        className={styles.prices}
        style={{
          marginBottom: `${height && "25px"}`,
          gridTemplateColumns: `${height && "repeat(4,1fr)"}`,
        }}
      >
        <div>
          <p className={styles.price_Num_cont}>
            <span style={{ color: "#00A3FF" }}>$500</span>
            <span className={styles.point}>
              <img
                src={`${
                  !red ? "/svgs/proj/GreenPoint.svg" : "/svgs/proj/RedPoint.svg"
                }`}
                alt=""
              />
            </span>
          </p>
          <p className={styles.small_Caption}>Raised</p>
        </div>
        <div className={styles.middle}>
          <p className={styles.price_Num_cont}>5000</p>
          <p className={styles.small_Caption}>Donations</p>
        </div>
        <div
          style={{
            borderInlineEnd: `${height && "1px solid #292d32"}`,
          }}
        >
          <p className={styles.price_Num_cont}>$10,000</p>
          <p className={styles.small_Caption}>Target</p>
        </div>
        {height && (
          <div>
            <p className={styles.price_Num_cont}>300</p>
            <p className={styles.small_Caption}>Days Left</p>
          </div>
        )}
      </div>
      {!height ? (
        <div className={styles.last__Row}>
          <div className={styles.left}>
            <img src="/svgs/proj/ByImage.svg" alt="" />
            <p>By 0xe2</p>
          </div>
          <div className={styles.left}>
            <img src="/svgs/proj/Cartcard.svg" alt="" />

            <Button path={`/projects/${id}`} type="link" text="Donate Now" />
          </div>
        </div>
      ) : (
        <div className={styles.last__Row}>
          <SocialIcon />
          <div style={{ display: "flex", gap: "8px" }}>
            <input type="text" placeholder="Enter Ammount" />
            {/**DropDown * */}
            <DropDown />
          </div>
          <div className={styles.left}>
            <img src="/svgs/proj/Cartcard.svg" alt="" />
            <Button path={`/projects/${id}`} type="link" text="Contribute" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjeectCard;
