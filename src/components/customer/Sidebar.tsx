"use client";

import { clearCart } from "@/redux/features/cartSlice";
import { logoutUser } from "@/redux/features/userSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import CartIcon from "@/svg/CartIcon"
import DashboardIcon from "@/svg/DashboardIcon"
import LocationIcon from "@/svg/LocationIcon"
import LogoutIcon from "@/svg/LogoutIcon"
import OrderIcon from "@/svg/OrderIcon"
import ProfileIcon from "@/svg/ProfileIcon"
import WishIcon from "@/svg/WishIcon"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"

const Sidebar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { token } = useAppSelector((state) => state.user.user);
    const router = useRouter();

    const handleLogout = async () => {
        await dispatch(logoutUser(token));
        dispatch(clearCart());
        router.push("/");
    }

  return (
   <div className="font-[600] text-gray-10 flex flex-col gap-2 min-w-[250px]">
        <Link href="/customer/dashboard">
            <div className="border border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <DashboardIcon stroke="#7E7E7E"/>
                Dashboard
            </div>
        </Link> 
        <Link href="/customer/order">
            <div className="text-white bg-green-10 rounded-xl p-3 w-full flex gap-2 items-center">
                <OrderIcon className="fill-white"/>
                Orders
            </div>
        </Link> 
        <Link href="/customer/cart">
            <div className="border border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <CartIcon className="fill-gray-10"/>
                Cart
            </div>
        </Link> 
        <Link href="/customer/wishlist">
            <div className="border border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <WishIcon className="fill-gray-10"/>
                Wishlist
            </div>
        </Link> 
        <Link href="/customer/wishlist">
            <div className="border border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <LocationIcon className="fill-gray-10"/>
                My Address
            </div>
        </Link> 
        <Link href="/customer/wishlist">
            <div className="border border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <ProfileIcon className="fill-gray-10"/>
                Account Details
            </div>
        </Link> 
        <div onClick={handleLogout} className="border cursor-pointer border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <LogoutIcon className="fill-gray-10"/>
                Logout
        </div>
        
   </div>
  )
}

export default Sidebar
