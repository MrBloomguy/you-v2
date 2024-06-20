import React from "react";
import styled from "./Banner.module.css";
function Banner({ text, image }) {
  return (
    <div className={styled.banner__cont}>
      <h1>{text}</h1>
      <img src={image} alt="bannerImage" />
    </div>
  );
}

export default Banner;
