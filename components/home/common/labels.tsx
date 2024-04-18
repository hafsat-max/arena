import React from "react";

interface ILabel {
  className?: string;
  heading: string;
}
export const Labels = (props: ILabel) => {
  return <article className={`text-[14px] uppercase px-3 py-1 rounded-xl self-start text-white ${props.className}`}>{props.heading}</article>;
};
