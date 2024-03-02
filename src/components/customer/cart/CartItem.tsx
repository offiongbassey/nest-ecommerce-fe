import DeleteIcon from "@/svg/DeleteIcon"
import StarIcon from "@/svg/StarIcon"


const CartItem = () => {
  return (
    <tr className="border border-gray-20">
        <td  className="px-1 py-3">
            <div style={{ backgroundImage: 'url("/product-3.png")'}} className="bg-cover bg-center bg-no-repeat px-2 py-14 border border-gray-20 rounded-lg"/>
        </td>
        <td className="px-4 py-3">Field Roast Chao Cheese Creamy Original <br/> <div className='flex gap-4 items-center py-1'> <StarIcon className='fill-[#FEC601]'/> <span className='text-sm font-[400] text-gray-10'>(4.0)</span></div></td>
        <td className="text-xl text-gay-10 px-4 py-3">$2.51</td>
        <td> <input className='border-2 border-green-500 rounded-md px-1 text-center w-20 h-10 focus:outline-none' type='number'/> </td>
        <td className="text-xl text-green-10 px-4 py-3">$2.51</td>
        <td className="px-4 py-3"><DeleteIcon className="stroke-gray-10" /></td>
    </tr>
  )
}

export default CartItem
