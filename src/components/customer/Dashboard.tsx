"use client";

import Link from "next/link"
import Sidebar from "./Sidebar"
import FooterBanner from "../footer/FooterBanner"
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Dashboard = () => {
  const router = useRouter();

  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if(user.token?.length < 1){
      router.push("/login");
    }
  }, [])

  return (
    <>
    <div className="padding-container max-container py-16">
        <div className="lg:px-24 flex flex-col md:flex-row gap-6 md:gap-14">
            <Sidebar />
            <div>
                <h2 className="text-green-30 text-3xl font-[600] mb-4">{user.first_name}!</h2>
                <p className="text-gray-10">From your account dashboard, you can easily check & review your <Link className="text-green-10" href="/">recent orders</Link>, manage your <Link className="text-green-10"  href="/">shipping and billing address</Link> and <Link className="text-green-10"  href="/">edit your password and account details.</Link></p>
            </div>
        </div>
    </div>
     <FooterBanner image="/footer-banner-2.png" />
     </>
  )
}

export default Dashboard
