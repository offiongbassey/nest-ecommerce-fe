import { ABOUT_WHAT_WE_OFFER } from '@/context/Context';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Title from './Title';

const WhatWeProvide = () => {
  return (
    <>
        <Title title="What We Provide?" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {ABOUT_WHAT_WE_OFFER.map((item, index) => {
            const { title, desc, url, image } = item;
            return (
            <div key={index} className='rounded-2xl border border-gray-30 px-4 py-10 text-center items-center justify-center flex flex-col'>
                <Image 
                src={image}
                alt={title}
                width={100}
                height={100}
                />
                <h4 className='text-green-30 text-xl font-[600] mb-4'>{title}</h4>
                <p>{desc}</p>
                <Link href={url} className='mt-3 text-green-10'>Read More</Link>
            </div>
            )})}
        </div>
        
    </>
  )
}

export default WhatWeProvide
