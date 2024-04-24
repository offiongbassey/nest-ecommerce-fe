import CartIcon from "@/svg/CartIcon";
import StarIcon from "@/svg/StarIcon";
import Button from "../Button";
import WrapCard from "../card/WrapCard";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/features/cartSlice";

interface ProductItemWrapProps {
  product: {
    name: string;      
    product_images: [{ id: number, image_url: string}];
    slug: string;
    store: { id: number, name: string, slug: string };
    regular_price: number;
    promo_price: number;
    currency: string;
    id: number;
    product_colors: [];
    quantity: number;
    quantity_sold: number;
    product_sizes: [];
  }
}
const ProductItemWrap = ({ product}: ProductItemWrapProps) => {
  const {id, name, store, product_colors, regular_price, quantity, quantity_sold, product_sizes, promo_price, product_images, currency, slug } = product;
  const dispatch = useDispatch<AppDispatch>();
  
  const defaultAddToCart = () => {
    dispatch(addToCart({ item: { id, name, currency, promo_price, regular_price, slug, product_colors, product_images, quantity, quantity_sold, product_sizes }, quantity: 1 }))
  }

  return (
    <div>
      
          <WrapCard slug={slug} image={product_images[0].image_url}>
            <Link href={`/product/${slug}`}>
                <h2 className='font-[600] text-green-30 text-sm mt-3'>{name}</h2>
                <div className='flex gap-4 items-center py-1'> <StarIcon className='fill-[#FEC601]'/> <span className='text-sm'>(4.0)</span></div>
                <p className='mb-3 text-sm'>By <span className='text-green-10'>{store.name}</span></p>
            </Link>

                <div className='flex gap-4 items-center justify-between'>
                    <h3 className='text-lg font-[600] text-green-10'>{currency}{promo_price.toLocaleString(undefined, {maximumFractionDigits: 2})} 
                      <del className='text-sm text-gray-70'> {currency}{regular_price.toLocaleString(undefined, {maximumFractionDigits: 2})}</del>
                    </h3> 
                    <Button onClick={defaultAddToCart} type='button' variant='btn_light_green' short={true}><CartIcon className='fill-green-10' width={16} /> Add</Button>
                </div>
          </WrapCard>
      
    </div>
  )
}

export default ProductItemWrap
