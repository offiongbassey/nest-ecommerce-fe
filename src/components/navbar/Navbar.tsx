"use client";

import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
import ArrowIcon from "@/svg/Arrow"
import Browse from "@/svg/Browse";
import Flame from "@/svg/Flame";
import MobileNavbar from "./MobileNavbar";
import { Dispatch, SetStateAction, useState } from "react";
import SupportCenter from "../SupportCenter";
import HeadphoneIcon from "@/svg/HeadphoneIcon";

interface NavbarProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({toggle, setToggle}: NavbarProps) => {
  return (
    <nav className="padding-container py-2 max-container flex justify-between">
            <ul className="hidden md:flex gap-2 lg:gap-4 items-center text-sm font-[600] text-green-30">
                <li><Button type="button" variant="btn_green"><Browse className="fill-white"/> Browse All Categories  <ArrowIcon className="fill-white" /></Button></li>
                <Link href="/">
                <li className="hidden items-center lg:flex gap-1 hover_green"><Flame className="fill-green-10" /> Deals </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 text-sm font-[600] text-green-10 "> Home <ArrowIcon className="fill-green-10" /> </li>
                </Link>
                <Link href="/about">
                <li className="flex gap-1 hover_green">About </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green"> Shop <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green">Vendors <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green"> Mega menu <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green">Blog <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green">Pages <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green">Contact </li>
                </Link>
            </ul>
           <SupportCenter phone_no="1900 - 888" message="24/7 Support Center">
            <HeadphoneIcon className="fill-green-30" />
           </SupportCenter>

            {/* Mobile Section */}
            {toggle &&  <MobileNavbar  setToggle={setToggle}/>}
           
    </nav>
  )
}

export default Navbar
