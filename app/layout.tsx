"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ArrowDown,
  ArrowDown2,
  Call,
  HambergerMenu,
  Heart,
  Profile,
  ShoppingCart,
} from "iconsax-react";
import { Divider } from "./icons/divider";
import Image from "next/image";
import { Button, Input, MantineProvider, Menu, Text } from "@mantine/core";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });


const list = [
  {
    id:'1',
    icon: <Profile size={20} />,
    text: "Profile",
  },
  {
    id:'2',
    icon: <Heart size={20} />,
    text: "All categories",
  },
  {
    id:'3',
    icon: <ShoppingCart size={20} />,
    text: "Cart",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <header className="">
            <nav className="bg-bg py-[14px] ">
              <div className="flexi justify-between width text-xs">
                <a href="" className="text-white flexi ">
                  <Call size={16} />
                  <span>+1 2345 56768</span>
                </a>

                <div className="flexi gap-24p text-xs">
                  <p className="text-white six">
                    Get 50% Off on Selected Items
                  </p>
                  <Divider />
                  <a href="" className="text-red">
                    Shop Now
                  </a>
                </div>

                <div className="flexi gap-32p text-white five ">
                  <div className="flexi gap-.5">
                    <span>EN</span>
                    <ArrowDown2 size={16} className="eight" />
                  </div>

                  <div className="gap-2 flexi">
                    <Image width={20} height={14.29} src="/flag.svg" alt="US" />
                    <span className="eight">United States</span>
                    <ArrowDown2 size={16} className="eight" />
                  </div>
                </div>
              </div>
            </nav>

            <nav className="bg-white py-6 width flexi justify-between text-primary text-16">
              <div className="flexi gap-113">
                <Image width={31.89} height={32} src="/logo.svg" alt="logo" />
                <ul className="flexi gap-32p eight">
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>On Sale</li>
                </ul>
              </div>

              <div className="flexi gap-32p">
                <Input
                  placeholder="Search here..."
                  styles={{
                    wrapper: {
                      border: "1px solid #D0D5DD",
                      borderRadius: "6px",
                      paddingInline: "12px",
                      paddingBlock: "8px",
                    },
                    input: {
                      width: "24vw",
                      outline: "none",
                      minWidth:'150px'
                    },
                  }}
                />

                <ul className="flexi gap-32p eight">
                 {
                  list.map(item=>(
                    <li className="flex flex-col gap-1" key={item.id}>
                      <>{item.icon}</>
                      <span className="nine-five">{item.text}</span>
                    </li>
                  ))
                 }
                </ul>

                <Menu shadow="md" position="bottom-end" styles={{dropdown:{zIndex:'999px'}}}>
                  <Menu.Target>
                    <HambergerMenu size={28} className="hidden eights" />
                  </Menu.Target>

                  <Menu.Dropdown>
                   <ul>
                   <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>On Sale</li>
                    <li>All Categories</li>
                   </ul>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </nav>
          </header>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
