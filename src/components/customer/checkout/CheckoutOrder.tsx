import StarIcon from "@/svg/StarIcon"


const CheckoutOrder = () => {
  return (
    <div className="">
      <div className="border border-gray-20 rounded-xl p-4 font-[600]">
        <div className="flex items-center justify-between gap-2 py-2">
            <h4 className="text-xl">Your Order</h4>
            <span className="text-gray-10 text-sm">Subtotal</span>
        </div>
        <hr/>
        <div className="relative overflow-x-auto mt-6">
            <table className="w-full text-left">
               <tbody>
                <tr className="border border-gray-20">
                    <td className="p-2"><div style={{ backgroundImage: 'url("/product-3.png")'}} className="bg-cover bg-center bg-no-repeat p-10 border border-gray-20 rounded-lg"/></td>
                    <td className="p-2 max-w-[200px]">Yidarton Women Summer Blue <br/> <div className='flex gap-4 items-center py-1'> <StarIcon className='fill-[#FEC601]'/> <span className='text-sm font-[400] text-gray-10'>(4.0)</span></div></td>
                    <td className="p-2 text-gray-10">x1</td>
                    <td className="p-2 text-green-10 text-xl">$13.3</td>
                </tr>
               </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default CheckoutOrder
