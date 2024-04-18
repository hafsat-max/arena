import { brands } from "@/app/utils/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import AppMarque from "./marque";

export const Brands = () => {
  return (
    <section className="width pt-[52px] flex flex-col gap-[26px]">
      <h2 className="text-primary font-semibold text-[28px]">Brands</h2>
      <AppMarque />
    </section>
  );
};
