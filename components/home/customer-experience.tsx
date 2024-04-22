import { ThreeD } from "@/app/icons/3d";
import { Emojiadd } from "@/app/icons/emojiadd";
import { CustomHeading } from "@/components/common/heading";
import { Avatar, Divider } from "@mantine/core";
import { Ship, ShoppingCart } from "iconsax-react";
import React from "react";

export const CustomerExperience = () => {
 const experience = [
  {
      icon:<ShoppingCart size={24} color="#F56630"/>,
      heading:'Original Products',
      paragraph:'We ensure money-back guarantee if the product is counterfeit'
  },
  {
      icon:<Emojiadd/>,
      heading:'Satisfaction Guarantee',
      paragraph:'We ensure money-back guarantee if the product is counterfeit'
  },
  {
      icon:<ThreeD />,
      heading:'New Arrival Everyday',
      paragraph:'We ensure money-back guarantee if the product is counterfeit'
  },
  {
      icon:<Ship size={24} color="#F56630"/>,
      heading:'Fast & Free Shipping',
      paragraph:'We ensure money-back guarantee if the product is counterfeit'
  },
]

  return (
    <section className="pt-20 width flex flex-col gap-10">
      <div className="flexi justify-between">
        <CustomHeading text="We provide the best customer experiences" className="max-w-[320px]" />
        <div className="w-full h-[1px] bg-grey100"></div>
      </div>

      <article className="flex justify-between">
        {
          experience.map((item,idx)=>(
            <div className="flex flex-col gap-4 " key={idx}>
              <div className=" w-12 h-11 bg-[#FFF4F0] rounded-full justify-center items-center flex">
                {item.icon}
              </div>

              <div className="gap-[6px] flex flex-col ">
                <h4 className="text-primary font-semibold text-lg leading-145">{item.heading}</h4>
                <p className="max-w-[248px] text-sm ">{item.paragraph}</p>

              </div>
            </div>
          ))
        }
      </article>
    </section>
  );
};
