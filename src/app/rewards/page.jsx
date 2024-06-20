import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import React from "react";
import styles from "./rewards.module.css";
import Withdraw from "@/components/Withdraw/Withdraw";
import Voting from "@/components/Voting/Voting";
function page() {
  const cardData = [
    {
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
  ];
  return (
    <div>
      <Banner
        text="Vote for your favurite project"
        image="/svgs/RewardBanner.svg"
      />
      <div className={styles.divide__Cont}>
        <div className={styles.cards__cont}>
          {cardData.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              bars={item.bars}
            />
          ))}
        </div>
        <div>
          <Withdraw />
          <Voting />
        </div>
      </div>
    </div>
  );
}

export default page;
