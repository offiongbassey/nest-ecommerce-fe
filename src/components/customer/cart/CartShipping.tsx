import Button from "@/components/Button"


const CartShipping = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 text-gray-10 gap-10">
        <div className="border border-gray-20 rounded-md p-6">
            <h4 className="text-green-30 text-xl font-[600]">Calculate Shipping</h4>
            <p>Flat rate: <span className="text-green-10">5%</span></p>
            <select className="my-4 secondary-input p-3">
                <option>United Kingdom</option>
            </select>
            <div className="flex flex-col lg:flex-row gap-3">
                <input className="secondary-input p-3" placeholder="State/Country"/>
                <input className="secondary-input p-3" placeholder="PostCode/Zip"/>
            </div>
        </div>

        <div>
            <h4 className="text-green-30 text-xl font-[600]">Apply Coupon</h4>
            <p>Using a promo Code?</p>
            <div className="flex gap-2 mt-4">
                <input className="secondary-input px-3 py-2" placeholder="Enter Your Coupon"/>
                <Button type="button" variant="btn_green" short={true}>Apply</Button>
            </div>
        </div>
    </div>
  )
}

export default CartShipping
