import Button from '../Button'
import StarIcon from '@/svg/StarIcon'
import CartIcon from '@/svg/CartIcon';

interface ProductItemProps {
    index: number;
    alternative?: boolean;
    product: {
        title: string;
        category: string;
        rate?: number;
        vendor: string;
        price: number;
        old_price: number;
        type: string;
        variant: string;
        image: string;
        sold?: string;
    }
}

const ProductItem = ({index, product, alternative}: ProductItemProps) => {
    const { title, category, rate, vendor, price, old_price, type, variant, image, sold} = product;
  return (
            <div key={index} className='border border-gray-30 rounded-2xl text-gray-60 overflow-hidden'>
                {type !== "" ? 
                <span style={{ backgroundColor: `${variant}`}} className={`text-white text-sm px-6 py-2 rounded-br-2xl rounded-tl-2xl`}>{type}</span> : null
                }
                <br/>
                <div style={{ backgroundImage: `url(${image})`}} className='bg-cover bg-center bg-no-repeat py-16 md:py-32 flex'> 
                </div>
                <div className='p-4'>
                    <span className='text-xs'>{category}</span>
                    <h2 className='font-[600] text-green-30 text-sm mt-3'>{title}</h2>
                    <div className='flex gap-4 items-center py-1'> <StarIcon className='fill-[#FEC601]'/> {rate &&<span className='text-sm'>({rate})</span>}</div>
                    <p className='mb-3 text-sm'>By <span className='text-green-10'>{vendor}</span></p>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center justify-between'>
                        <h3 className='text-lg font-[600] text-green-10'>${price} <del className='text-sm text-gray-70'> ${old_price}</del></h3> {!alternative && <Button type='button' variant='btn_light_green' short={true}><CartIcon className='fill-green-10' width={16} /> Add</Button>}
                    </div>
                    {/* On alternative only */}
                    {alternative &&
                    <>
                    <div className='w-full bg-gray-80 h-1 rounded-full my-2'>
                        <div className='w-[50%] h-1 bg-green-10 rounded-full'></div>
                    </div>
                    <p className='text-green-30 font-[400]'>Sold: {sold}</p>
                    <br/>
                    <Button type='button' variant='btn_green'>Add to Cart</Button>
                    </>
                    }
                </div>
            </div>
  )
}

export default ProductItem
