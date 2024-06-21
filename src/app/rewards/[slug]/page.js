"use client";
import OddComponent from "@/components/Rewards/OddComponent";
import { usePathname } from "next/navigation";
import React from "react";

function page() {
  const pathName = usePathname();
  let routeId = +pathName.split("/").slice(-1)[0];
  return (
    <>{routeId % 2 === 0 ? <div>page{pathName}even</div> : <OddComponent />}</>
  );
}

export default page;
