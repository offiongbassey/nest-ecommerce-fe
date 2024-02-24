import ArrowIcon from '@/svg/Arrow'
import Link from 'next/link'
import React from 'react'
import ProductItemWrap from './ProductItemWrap'
import { DEALS_OF_THE_DAY } from '@/context/Context'

const DealsOfDay = () => {
  return (
    <div className='padding-container max-container py-6'>
        <div className='flex flex-col lg:flex-row gap-4 justify-between'>
            <h3 className='text-2xl text-green-30 font-[600]'>Deals Of The Day</h3>
            <Link href="/" className='flex items-center'> All Deals <span className=' rotate-[270deg]'><ArrowIcon className='fill-gray-10 ml-[5px] mb-2' size={22} /></span></Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6'>
            {DEALS_OF_THE_DAY.map((product, index) => (
                <ProductItemWrap key={index} product={product} />
            ))}
        </div>
    </div>
  )
}

export default DealsOfDay
