"use client"

import { brands } from "@/app/utils/data";
import React from "react";
import Marquee from "react-fast-marquee";

const AppMarque = () => {
  return (
    <Marquee>
      {brands.map((item, idx) => (
        <img src={item.src} key={idx} />
      ))}
    </Marquee>
  );
};

export default AppMarque;
