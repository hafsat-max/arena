import { Button } from "@mantine/core";
import { ArrowRight2 } from "iconsax-react";
import React, { ReactNode } from "react";

interface ICustomButton{
    text:ReactNode;
    className:string;
    rightSection?:ReactNode
};

export const CustomButton = (props:ICustomButton) => {
  return <Button
  rightSection={props.rightSection}
  className={`self-start gap-2 p-4 rounded-lg  ${props.className}`}
  styles={{
    inner: {
      display: "flex",
      alignItems: "center",
    },
  }}
>
  {props.text}
</Button>
};
