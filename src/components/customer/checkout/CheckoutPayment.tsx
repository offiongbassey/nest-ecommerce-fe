import Button from "@/components/Button"
import LogoutIcon from "@/svg/LogoutIcon"
import Image from "next/image"

const CheckoutPayment = () => {
  return (
    <div className='mt-10 flex flex-col gap-2'>
        <h4 className="text-xl font-[600] mb-4">Payment</h4>
        <div className="flex gap-2 items-center">
            <input type="radio" name="payment-option" id="" className="" />
            <label>Direct Bank Transfer</label>
        </div>
        <div className="flex gap-2 items-center">
            <input type="radio" name="payment-option" id="" className="" />
            <label>Cash on Delivery</label>
        </div>
        <div className="flex gap-2 items-center">
            <input type="radio" name="payment-option" id="" className="" />
            <label>Online Gateway</label>
        </div>
        <div>
            <Image src="/footer-payment.png"
            alt="payment"
            width={80}
            height={20}
            />
            
        </div>
        <div><Button type="button" variant="btn_green" short={true}>Place an Order <LogoutIcon className="fill-white" /></Button></div>
       
    </div>
  )
}

export default CheckoutPayment
