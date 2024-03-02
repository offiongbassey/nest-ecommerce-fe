import Button from "@/components/Button"
import OrderIcon from "@/svg/OrderIcon"
import ProfileIcon from "@/svg/ProfileIcon"
import Link from "next/link"
import BillingForm from "./BillingForm"
import CheckoutOrder from "./CheckoutOrder"
import CheckoutPayment from "./CheckoutPayment"
import FooterBanner from "@/components/footer/FooterBanner"

const Checkout = () => {
  return (
    <>
    <section className="padding-container max-container py-16">
            <h2 className="text-green-30 text-3xl font-[600]">Checkout</h2>
            <p className="text-gray-10 font-[500] text-sm">There are <Link className="text-green-10" href="/">3</Link> products in your cart</p>
            <div className="flex flex-col lg:flex-row gap-10 mt-10">
                <div>
                    <div className="flex flex-col md:flex-row gap-4 text-sm">
                        <div className="border border-gray-30 rounded-lg px-2 lg:px-6 py-2 shadow-sm flex gap-2 items-center">
                            <ProfileIcon className="fill-gray-10" /> <p>Already have an account? <Link className="text-green-10" href="/">Click here to login</Link></p>
                        </div>
                        <div className="flex items-center">
                            <div className="border rounded-s-lg border-gray-30 flex items-center px-2">
                            <OrderIcon className="fill-gray-10" />
                            <input className="focus:outline-none p-4 max-w-[100px] md:max-w-[100%]" placeholder="Enter Coupon Code..." />
                            </div>
                            <button type="button" className="p-4 rounded-e-lg text-white bg-green-30 border border-green-30 text-nowrap" >Apply Coupon</button>
                        </div>
                    </div>
                    <BillingForm />
                </div>
                <div>
                    <CheckoutOrder />
                    <CheckoutPayment />
                </div>
            </div>
    </section>

    <FooterBanner image="/footer-banner-1.png" />
    </>
  )
}

export default Checkout
