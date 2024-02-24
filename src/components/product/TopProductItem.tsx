import StarIcon from '@/svg/StarIcon'

interface TopProductItemProps {
    product: {
        title: string;
        items: {
            name: string;
            rate: number;
            price: number;
            old_price: number;
            image: string;
        }[];
    }
}

const TopProductItem = ({ product}: TopProductItemProps) => {
const { title, items} = product;
  return (
    <div>
    <h4 className='text-xl font-[600] mb-2'>{title}</h4>
    <div className='bg-green-20 w-20 py-[2px]'/>
    <div className='py-6 flex flex-col gap-4 border-t border-gray-30'>
       {items.map((item, index) => {
        const { name, rate, price, old_price, image } = item;
        return ( 
        <div className='gap-4 flex'>
            <div style={{ backgroundImage: `url(${image})`}} className='bg-center bg-cover p-12 rounded-2xl' />
            <div>
                <h6 className='text-xs lg:text-sm font-[600]'>{name}</h6>
                <div className='flex gap-4 items-center py-1'> <StarIcon className='fill-[#FEC601]'/><span className='text-sm text-gray-70'>({rate})</span></div>
                <h3 className='text-lg font-[600] text-green-10'>${price} <del className='text-sm text-gray-70'> ${old_price}</del></h3>
            </div>
        </div>
        )
        })}  
    </div>
  </div>
  )
}

export default TopProductItem
