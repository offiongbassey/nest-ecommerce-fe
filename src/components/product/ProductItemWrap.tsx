import CartIcon from "@/svg/CartIcon";
import StarIcon from "@/svg/StarIcon";
import Button from "../Button";

interface ProductItemWrapProps {
  index: number;
  product: {
    title: string;
    rate: number;
    vendor: string;
    price: number;
    old_price: number;
    image: string;
  }
}
const ProductItemWrap = ({index, product}: ProductItemWrapProps) => {
  const {title, rate, vendor, price, old_price, image } = product;
  return (
    <div className="">
        <div style={{ backgroundImage: `url(${image})`}} className="px-20 py-32 bg-cover bg-center bg-no-repeat rounded-2xl">
        </div>
        <div className="p-3 lg:p-6 rounded-2xl m-4 -mt-20 bg-white shadow-xl text-gray-50">
            <h2 className='font-[600] text-green-30 text-sm mt-3'>{title}</h2>
            <div className='flex gap-4 items-center py-1'> <StarIcon className='fill-[#FEC601]'/> <span className='text-sm'>({rate})</span></div>
            <p className='mb-3 text-sm'>By <span className='text-green-10'>{vendor}</span></p>
            <div className='flex gap-4 items-center justify-between'>
                <h3 className='text-lg font-[600] text-green-10'>${price} <del className='text-sm text-gray-70'> ${old_price}</del></h3> <Button type='button' variant='btn_light_green' short={true}><CartIcon className='fill-green-10' width={16} /> Add</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductItemWrap
