import Button from "@/components/Button"
import CartList from "./CartList"
import LongArrowIcon from "@/svg/LongArrowIcon"
import RotateIcon from "@/svg/RotateIcon"
import CartShipping from "./CartShipping"
import CartSubtotal from "./CartSubtotal"
import FooterBanner from "@/components/footer/FooterBanner"

const Cart = () => {
  return (
    <>
    <section className="padding-container max-container py-16">
            <h2 className="text-3xl text-green-30 font-[600]">Your Cart</h2>
            <p className="text-gray-10 font-[500] text-sm">There are 3 products in your cart</p>
            <div className="flex flex-col lg:flex-row gap-10">
                <div>
                    <CartList/>
                    <br/>
                    <hr/>
                    <div className="flex gap-2 items-center justify-between mt-6">
                        <Button type="button" variant="btn_green" short={true}><LongArrowIcon className="fill-white" /> Continue Shopping</Button>
                        <Button type="button" variant="btn_green" short={true}><RotateIcon className="stroke-white" /> Update Cart</Button>
                    </div>
                    <CartShipping />
                </div>
                <CartSubtotal/>
            </div>
    </section>
    <FooterBanner image="/footer-banner-1.png" />
    </>
  )
}

export default Cart
