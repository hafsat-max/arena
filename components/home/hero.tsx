import { Button } from "@mantine/core";
import { Arrow, ArrowRight2 } from "iconsax-react";
import React from "react";

export const Hero = () => {
  return (
    <section className="background pl-[68px] flexi max-[500px]:justify-center max-[600px]:pl-0 max-[600px]:!p-4 width rounded-[10px] ">
      <div className="flex flex-col gap-7 text-white">
        <label htmlFor="" className="py-1 px-3 bg-blue self-start  rounded-xl">
          ENDLESS SUMMER SALE
        </label>

        <h1 className="max-w-[400px] leading-[105%] tracking-[-2%] text-60 font-medium">
          Up to 60% off on all items till September 11
        </h1>

        <Button
          rightSection={<ArrowRight2 size={24} />}
          className="self-start bg-btn-sec rounded-lg p-4 hover:bg-red cursor-pointer"
          styles={{
            inner: {
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          Shop now
        </Button>
      </div>
    </section>
  );
};
