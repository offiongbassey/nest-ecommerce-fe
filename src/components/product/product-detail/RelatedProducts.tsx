import { RELATED_PRODUCTS } from '@/context/Context'
import React from 'react'
import ProductCard from '../ProductCard'
import StarIcon from '@/svg/StarIcon'

const RelatedProducts = () => {
  return (
    <div>
        <h3 className=' text-lg font-[600] text-green-30 py-6'>Related products</h3>
        <div className='bg-green-20 w-20 py-[2px]'/>
         <hr className="mb-6"/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {RELATED_PRODUCTS.map((product) => {
                const { variant, image, type, title, rate, price, old_price } = product;
                return (
                    <ProductCard variant={variant} image={image} type={type}>
                        <div className='p-4'>
                            <h2 className='font-[600] text-green-30 text-sm mt-3'>{title}</h2>
                            <div className='flex items-center py-1'> {Array(rate).fill(1).map((_, index) => ( <StarIcon className='fill-[#FEC601]'/>  ))}</div>
                            <div className='flex flex-col md:flex-row gap-4 md:items-center justify-between'>
                            <h3 className='text-lg font-[600] text-green-10'>${price} <del className='text-sm text-gray-70'> ${old_price}</del></h3> 
                        </div>
                        </div>
                    </ProductCard>
                )
            })}
        </div>
    </div>
  )
}

export default RelatedProducts
