"use client";
import Banner from "@/components/Banner/Banner";
import React, { useState } from "react";
import styles from "./Projects.module.css";
import Link from "next/link";
import ProjeectCard from "@/components/projectCard/ProjeectCard";
import ProjectsData from "./ProjectsData";
function page() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Banner
        text="Check Out Your favorite projects "
        image="/svgs/proj/BannerSvg.svg"
      />
      <div className={styles.main_Title}>
        <h2>Trending Buidls</h2>
        <div className={styles.process_cont}>
          <div className={styles.filter__btn__cont}>
            <button onClick={() => setActive(!active)}>
              <span>
                <img src="/svgs/proj/Filter.svg" alt="" />
              </span>
              All <img src="/svgs/Arrow.svg" />
            </button>
            <div
              className={`${styles.dropdown} ${active ? styles.active : ""}`}
            >
              <ul>
                <li>
                  <Link href="#">1</Link>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
              </ul>
            </div>
          </div>
          <button>
            <img src="/svgs/proj/Sec.svg" alt="" />
          </button>
          <button>
            <img src="/svgs/proj/Menu.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.divide}>
        {ProjectsData.map((item, index) => (
          <ProjeectCard
            image={item.image}
            key={index}
            red={item.red}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
