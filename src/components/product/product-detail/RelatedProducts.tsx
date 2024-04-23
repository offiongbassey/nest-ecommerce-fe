import { RELATED_PRODUCTS } from '@/context/Context'
import React from 'react'
import ProductCard from '../ProductCard'
import StarIcon from '@/svg/StarIcon';
import { ProductAttributes } from '@/utils/TypesUtils';
import Link from 'next/link';

type RelatedProductsAttributes = {
     id: number;
     name: string;
     promo_price: number;
     regular_price: number;
     slug: string;
     currency: string;
     product_images: [{ id: number; image_url: string; }] 
}

const RelatedProducts = ({related_products}: {related_products: [RelatedProductsAttributes]}) => {
  return (
    <div>
        <h3 className=' text-lg font-[600] text-green-30 py-6'>Related products</h3>
        <div className='bg-green-20 w-20 py-[2px]'/>
         <hr className="mb-6"/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {related_products.map((product) => {
                const { id, name, currency, promo_price, regular_price, product_images, slug } = product;
                return (
                    <Link href={`/product/${slug}`}>
                        <ProductCard variant='#F74B81' product_images={product_images} type="Hot">
                            <div className='p-4'>
                                <h2 className='font-[600] text-green-30 text-sm mt-3'>{name}</h2>
                                <div className='flex items-center py-1'> {Array(4).fill(1).map((_, index) => ( <StarIcon className='fill-[#FEC601]'/>  ))}</div>
                                <div className='flex flex-col md:flex-row gap-4 md:items-center justify-between'>
                                <h3 className='text-lg font-[600] text-green-10'>{currency}{promo_price?.toLocaleString(undefined, { maximumFractionDigits: 2})} <del className='text-sm text-gray-70'> ${regular_price?.toLocaleString(undefined, { maximumFractionDigits: 2})}</del></h3> 
                            </div>
                            </div>
                        </ProductCard>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default RelatedProducts
