import CartIcon from "@/svg/CartIcon"
import LocationIcon from "@/svg/LocationIcon"
import LogoutIcon from "@/svg/LogoutIcon"
import OrderIcon from "@/svg/OrderIcon"
import ProfileIcon from "@/svg/ProfileIcon"
import WishIcon from "@/svg/WishIcon"
import Link from "next/link"

const Sidebar = () => {
  return (
   <div className="font-[600] text-gray-10 flex flex-col gap-2 min-w-[250px]">
        <Link href="/customer/wishlist">
            <div className="border border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <WishIcon className="fill-gray-10"/>
                Wishlist
            </div>
        </Link> 
        <Link href="/customer/wishlist">
            <div className="text-white bg-green-10 rounded-xl p-3 w-full flex gap-2 items-center">
                <OrderIcon className="fill-white"/>
                Orders
            </div>
        </Link> 
        <Link href="/customer/wishlist">
            <div className="border border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <CartIcon className="fill-gray-10"/>
                Cart
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
        <Link href="/customer/wishlist">
            <div className="border border-gray-30 rounded-xl p-3 w-full flex gap-2 items-center">
                <LogoutIcon className="fill-gray-10"/>
                Logout
            </div>
        </Link> 
        
   </div>
  )
}

export default Sidebar
