import Button from '../Button'
import StarIcon from '@/svg/StarIcon'
import CartIcon from '@/svg/CartIcon';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addToCart } from '@/redux/features/cartSlice';

interface ProductItemProps {
    alternative?: boolean;
    type: string;
    variant: string;
    product: {
        name: string;
        sub_category: { id: number, name: string, slug: string };        
        product_images: [{ id: number, image_url: string}];
        quantity: number;
        quantity_sold: number;
        slug: string;
        store: { id: number, name: string, slug: string };
        regular_price: number;
        promo_price: number;
        currency: string;
        id: number;
        product_colors: [];
        product_sizes: [];
        newQuantity: number;
    }
}

const ProductItem = ({ product, alternative, type, variant}: ProductItemProps) => {
    const {id, name, store, sub_category, product_colors, regular_price, quantity, product_sizes, newQuantity,  quantity_sold, promo_price, product_images, currency, slug} = product;

    const dispatch = useDispatch<AppDispatch>();

    const defaultAddToCart = () => {
        dispatch(addToCart({ item: { id, name, currency, promo_price, regular_price, slug, product_colors, product_images, quantity, quantity_sold, product_sizes }, quantity: 1 }))
    }
  return (
           
                <ProductCard variant={variant} product_images={product_images} slug={slug} type={type}>
                        <div className='p-4'>
                            <Link href={`/product/${slug}`}>
                                <span className='text-xs'>{sub_category.name}</span>
                                <h2 className='font-[600] text-green-30 text-sm mt-3'>{name}</h2>
                                <div className='flex gap-4 items-center py-1'> <StarIcon className='fill-[#FEC601]'/> <span className='text-sm'>(4)</span></div>
                                <p className='mb-3 text-sm'>By <span className='text-green-10'>{store.name}</span></p>
                            </Link>
                            <div className='flex flex-col md:flex-row gap-4 md:items-center justify-between'>
                                <h3 className='text-lg font-[600] text-green-10'>{currency}{promo_price.toLocaleString(undefined, { maximumFractionDigits: 2})} 
                                    <del className='text-sm text-gray-70'> {currency}{regular_price.toLocaleString(undefined, {maximumFractionDigits: 2})}</del>
                                </h3> 
                                {!alternative && 
                                <Button onClick={defaultAddToCart} type='button' variant='btn_light_green' short={true}><CartIcon className='fill-green-10' width={16} /> Add</Button>
                                }
                            </div>
                         
                            {/* On alternative only */}
                            {alternative &&
                            <>
                            <div className='w-full bg-gray-80 h-1 rounded-full my-2'>
                                <div className='w-[50%] h-1 bg-green-10 rounded-full'></div>
                            </div>
                            <p className='text-green-30 font-[400]'>Sold: {quantity_sold} / {quantity + quantity_sold}</p>
                            <br/>
                            <Button onClick={defaultAddToCart} type='button' variant='btn_green'>Add to Cart</Button>
                            </>
                            }
                        </div>
                    </ProductCard>
          
          
  )
}

export default ProductItem
