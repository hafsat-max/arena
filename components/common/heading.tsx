import React, { ReactNode } from 'react'

interface IHeading{
    text:string;
    className?:string;
};

export const CustomHeading = (props:IHeading) => {
  return (
    <h2 className={`text-primary font-semibold text-[28px] ${props.className}`}>{props.text}</h2>
  )
}

