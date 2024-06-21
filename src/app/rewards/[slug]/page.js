"use client";
import { usePathname } from "next/navigation";
import React from "react";

function page() {
  const pathName = usePathname();
  return <div>page{pathName}</div>;
}

export default page;
