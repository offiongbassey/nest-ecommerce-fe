import Button from '@/components/Button'
import CartIcon from '@/svg/CartIcon'
import ShareIcon from '@/svg/ShareIcon'
import StarIcon from '@/svg/StarIcon'
import WishIcon from '@/svg/WishIcon'
import { ProductAttributes } from '@/utils/TypesUtils'
import React from 'react'

interface Product {
    id: number;
    name: string;
    currency: string;
    description: string;
    promo_price: number;
    regular_price: number;
    slug: string;
    status: string;
    product_colors: [];
    product_images: [{ id: number; image_url: string; }];
    quantity: number;
    quantity_sold: number;
    product_sizes: [];
}
const ProductInfo: React.FC<{product: Product}> = ({ product }) => {
    const { name, currency, promo_price, regular_price, description, product_sizes} = product;
    const discount = 100 * (regular_price - promo_price) / regular_price;
    
  return (
    <div>
        <strong className='bg-pink-20 text-pink-10 py-2 px-4 rounded-xl'>Sale Off</strong>
        <h2 className='text-green-30 font-[600] text-2xl pt-4'>{name}</h2>
        <div className='flex gap-3 py-1'>
            <StarIcon className='fill-yellow-10' />
            <span className='text-gray-70 text-sm'>(32 reviews)</span>
        </div>
        <div className='flex gap-3 items-center mb-4'>
            <h2 className='font-[800] text-green-10 text-5xl'>{currency}{promo_price?.toLocaleString(undefined, {maximumFractionDigits: 2})}</h2>
            <div className='flex flex-col'>
                <span className='text-[11px] text-yellow-10 font-semibold'>{Math.ceil(discount)}% Off</span>
                <del className='font-[600] text-2xl text-gray-70'>{currency}{regular_price?.toLocaleString(undefined, { maximumFractionDigits: 2})}</del> 
            </div>
        </div>
        <p className='lg:max-w-[400px]'>{description}</p>
        <div className='flex items-center py-2'>
            <label>Size / Weight: </label>
            {product_sizes?.map((item: { _size: { id: number, size: string}}) => (
                <Button key={item?._size?.id} type='button' variant='btn_white' short={true}>{item?._size?.size}</Button>
            ))}
           {/* <Button type='button' variant='btn_green' short={true}>60g</Button> */}
        </div>
        <div className='flex gap-2'>
            <input className='border-2 border-green-500 rounded-md px-1 text-center w-20 focus:outline-none' type='number'/> 
            <Button type='button' variant='btn_green' short={true}><CartIcon className='fill-white' /> Add to cart</Button>
            <Button type='button' variant='btn_white_outline' short={true}><WishIcon className='fill-gray-92' /></Button>
            <Button type='button' variant='btn_white_outline' short={true}><ShareIcon className='fill-gray-92' /></Button>
        </div>
        
        <ul className='grid grid-cols-2 items-start justify-start max-w-[300px] gap-2 mt-10'>
            <li>Type: <span className='text-green-10'>Organic</span></li>
            <li>SKU: <span className='text-green-10'>FWM15VKT</span></li>
            <li>MFG: <span className='text-green-10'>Jun 4.2022</span></li>
            <li>Tags: <span className='text-green-10'>Snack, Organic, Brown</span></li>
            <li>LIFE: <span className='text-green-10'>70 days</span></li>
            <li>Stock: <span className='text-green-10'>8 Items In Stock</span></li>
        </ul>
    </div>
  )
}

export default ProductInfo
