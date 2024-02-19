import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
import ArrowIcon from "@/svg/Arrow"
import Browse from "@/svg/Browse";
import Flame from "@/svg/Flame";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
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
                <Link href="/">
                <li className="flex gap-1 hover_green">About </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green"> Shop  <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green">Vendors  <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green"> Mega menu  <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green">Blog  <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green">Pages  <ArrowIcon className="fill-green-30" /> </li>
                </Link>
                <Link href="/">
                <li className="flex items-center gap-1 hover_green">Contact </li>
                </Link>
            </ul>
            <div className="hidden lg:flex gap-2">
                <Image 
                src="/icon-headphone.svg"
                alt="headphone"
                width={40}
                height={10}
                />
               <div>
                    <h4 className="text-green-10 font-[600] text-xl">1900 - 888</h4>
                    <p className="text-[10px] font-[500] text-gray-10">24/7 Support Center</p>
               </div>
            </div>

            {/* Mobile Section */}
            <MobileNavbar />
    </nav>
  )
}

export default Navbar
