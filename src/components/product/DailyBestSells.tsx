"use client";

import { DAILY_BEST_SELL } from "@/context/Context";
import Link from "next/link";
import ProductItem from "./ProductItem";
import Button from "../Button";
import LongArrowIcon from "@/svg/LongArrowIcon";
import { useState } from "react";

const DailyBestSells = () => {
    const [startFrom, setStartFrom] = useState(0);
    const [endAt, setEndAt] = useState(4);
    
    const prevProduct = () => {
        const is_previous_start = startFrom === 0;
        const new_start = is_previous_start ? startFrom : startFrom - 1;
        const new_end = is_previous_start ? endAt : endAt - 1;
        setStartFrom(new_start);
        setEndAt(new_end);
    }

    const nextProduct = () => {
        const is_new_end = endAt === DAILY_BEST_SELL.length;
        const new_start = is_new_end ? startFrom : startFrom + 1;
        const new_end = is_new_end ? endAt : endAt + 1;
        setStartFrom(new_start);
        setEndAt(new_end);
    }
   
  return (
    <div className="padding-container max-container py-6 text-green-30 text-xs lg:text-sm font-[600]">
         <div className='flex flex-col lg:flex-row lg:gap-4 lg:items-center justify-between'>
            <h3 className='text-2xl'>Daily Best Sells</h3>
            <div className='grid grid-cols-3 md:flex gap-2 md:gap-4'>
                <Link href="/" className='text-green-10'>Featured</Link>
                <Link href="/">Popular</Link>
                <Link href="/">New added</Link>
            </div>
        </div>

        {/* Product List */}
        <button type="button" onClick={prevProduct} className="p-3 bg-gray-90 rounded-full absolute mt-64 left-2 lg:left-[24%]"><LongArrowIcon className="fill-gray-10" /></button>
        <button type="button" onClick={nextProduct} className="p-3 bg-gray-90 rounded-full rotate-180 absolute mt-64 right-2 lg:right-24"><LongArrowIcon className="fill-gray-10" /></button>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 lg:gap-4 py-6">
            <div className="hidden lg:flex flex-col rounded-2xl bg-green-10 bg-daily-best bg-cover bg-center px-10 py-20">
                <h2 className="text-2xl mb-20">Bring nature into your home</h2>
                <Button type="button" variant="btn_green" short={true}>Shop Now</Button>
            </div>
            
            {DAILY_BEST_SELL.slice(startFrom, endAt).map((product, index) => (
                <ProductItem index={index} product={product} alternative={true} />
            ))}
        </div>
    </div>
  )
}

export default DailyBestSells
