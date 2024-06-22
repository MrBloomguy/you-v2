"use client";
import EvenComponet from "@/components/Rewards/EvenComponet";
import OddComponent from "@/components/Rewards/OddComponent";
import { usePathname } from "next/navigation";
import React from "react";

function page() {
  const pathName = usePathname();
  let routeId = +pathName.split("/").slice(-1)[0];
  return <>{routeId % 2 === 0 ? <OddComponent /> : <EvenComponet />}</>;
}

export default page;
