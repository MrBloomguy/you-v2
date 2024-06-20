"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import HomeSvg from "../../../public/svgs/HomeSvg";
import QFround from "../../../public/svgs/QFround";
import Projects from "../../../public/svgs/Projects";
import styles from "./Aside.module.css";
import RewardsSvg from "../../../public/svgs/RewardsSvg";
import BridgeSvg from "../../../public/svgs/BridgeSvg";
import MintDomain from "../../../public/svgs/MintDomain";
import DonationSvg from "../../../public/svgs/DonationSvg";
import DocsSvg from "../../../public/svgs/DocsSvg";
import LogoutSvg from "../../../public/svgs/LogoutSvg";
function Aside() {
  const pathName = usePathname();

  console.log(pathName);
  const Links = [
    {
      name: "Home",
      path: "/",
      icon: <HomeSvg />,
    },
    {
      name: "QF Rounds",
      path: "/qfrounds",
      icon: <QFround />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Projects />,
    },
    {
      name: "Rewards",
      path: "/rewards",
      icon: <RewardsSvg />,
    },
    {
      name: "Bridge",
      path: "/bridge",
      icon: <BridgeSvg />,
    },
    {
      name: "Mint Domain",
      path: "/mintdomain",
      icon: <MintDomain />,
    },
    {
      name: "Donation",
      path: "/donation",
      icon: <DonationSvg />,
    },
    {
      name: "Docs",
      path: "/docs",
      icon: <DocsSvg />,
    },
  ];
  return (
    <aside className={styles.aside__cont}>
      <div className={styles.divide}>
        <img
          style={{ width: "185px", height: "50px", margin: " 0 auto" }}
          src="/svgs/Logo.svg"
          alt=""
        />
        <ul>
          {Links.map((item, index) => (
            <li
              key={index}
              className={item.path === pathName ? styles.active : "a"}
            >
              <Link href={`${item.path}`}>
                <span className={styles.icon}> {item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link id={styles.logOut} href="/">
          <span style={{ height: "24px" }}>
            <LogoutSvg />
          </span>
          Log Out
        </Link>
      </div>
    </aside>
  );
}

export default Aside;
