const BillingForm = () => {
  return (
    <div>
        <h2 className="text-2xl font-[600] text-green-30 mt-10">Billing Details</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
            <input className="secondary-input px-4 py-3" type="text" placeholder="First name" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="Last name" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="Address" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="Address line 2" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="select an option" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="City/Town" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="Postcode/Zip" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="Phone" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="Company Name" />
            <input className="secondary-input px-4 py-3" type="text" placeholder="Email address" />
        </div>
        <textarea className="secondary-input px-4 py-3 w-full" rows={6}></textarea>
        <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Create an account?</label>
        </div><div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Ship to a different address</label>
        </div>
    </div>
  )
}

export default BillingForm
