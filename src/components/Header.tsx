"use client";

import Image from "next/image";
import Link from "next/link";
import SearchItem from "./category/SearchItem";
import Arrow from "./Arrow";
import { IoIosMenu } from "react-icons/io";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import ProfileIcon from "@/svg/ProfileIcon";
import { useAppSelector } from "@/redux/store";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { totalCartItem } = useAppSelector((state) => state.cart);
  return (
    <>
    <header className="padding-container max-container text-gray-10 text-sm font-[500]">
        <div className="hidden lg:flex justify-between items-center py-2">
            <div className="flex gap-4">
                <Link href="/">About Us</Link> <span className="text-gray-20">|</span>
                <Link href="/">My Account</Link> <span className="text-gray-20">|</span>
                <Link href="/">Wishlist</Link> <span className="text-gray-20">|</span>
                <Link href="/">Order Tracking</Link>
            </div>
            <div className="flex gap-2">
               <p>Need help? Call Us: <Link href="/" className="text-green-10">+2340803563521</Link></p> <span className="text-gray-20">|</span>
               <p>English </p><Arrow/> <span className="text-gray-20"> |</span>
               <p>USD</p><Arrow/>
            </div>
        </div>

        <div className="flex justify-between md:justify-start gap-10 lg:gap-0 lg:justify-between items-center py-6 border-y-2 border-gray-20">
            {/* toggle icon */}
            <button onClick={() => setToggle((prev) => !prev)} type="button" className="flex md:hidden">
            <IoIosMenu className="text-green-30" size={35} />
            </button>
            
            <Link href="/">
            <Image 
                src="/logo.svg"
                alt="logo"
                width={121}
                height={46}
            />
            </Link>
            <SearchItem />
            <div className="flex gap-4">
                <div className="hidden lg:flex gap-2 items-center justify-between px-4 text-green-10 border border-gray-30 shadow-md rounded-md">
                   <Image
                    src="/location.svg"
                    alt="location"
                    width={15}
                    height={36}
                   />
                   <p> Your Location</p>
                  <Arrow/>
                </div>
                <Link href="/customer/compare" className="hidden lg:flex justify-start items-end gap-1">
                <span className="cirlce-count">3</span>
                <Image
                    src="/compare.svg"
                    alt="compare"
                    width={26}
                    height={26}
                   />
                    <p>Compare</p>
                </Link>
                <Link href="/customer/wishlist" className="flex justify-start items-end  gap-1">
                <span className="cirlce-count">3</span>
                <Image
                    src="/wishlist.svg"
                    alt="wishlist"
                    width={26}
                    height={26}
                   />
                    <p>Wishlist</p>
                </Link>
                <Link href="/customer/cart"  className="flex justify-start items-end gap-1">
                {totalCartItem > 0 && <span className="cirlce-count">{totalCartItem}</span>}
                <Image
                    src="/cart.svg"
                    alt="cart"
                    width={26}
                    height={26}
                   />
                    <p>Cart</p>
                </Link>
                <Link href="/customer/profile" className="hidden lg:flex justify-start items-end  gap-1">
                <ProfileIcon className="fill-gray-94"/>
                    <p>Account</p>
                </Link>
            </div>
        </div>
    </header>
    <Navbar toggle={toggle} setToggle={setToggle} />
    </>
  )
}

export default Header
