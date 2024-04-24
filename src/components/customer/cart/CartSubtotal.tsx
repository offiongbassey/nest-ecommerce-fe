import Button from "@/components/Button";

const CartSubtotal = ({ totalCartValue }: { totalCartValue: number }) => {
  return (
    <div className="lg:min-w-[320px]">
      <div className="border border-gray-20 rounded-2xl shadow-md mt-10 text-sm font-[600] text-gray-10">
        <div className="m-6 ">
          <div className="border border-gray-30 p-2">
            <div className="flex gap-2 items-center justify-between">
              <p>Subtotal</p>{" "}
              <h4 className="text-green-10 text-lg">
                ₦
                {totalCartValue.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </h4>
            </div>
          </div>
          <div className="border border-gray-30 px-2 py-4">
            <hr />
          </div>
          <div className="border border-gray-30 p-2">
            <div className="flex gap-2 items-center justify-between">
              <p>Shipping</p> <h4 className="text-green-30 text-lg">Free</h4>
            </div>
          </div>
          <div className="border border-gray-30 p-2">
            <div className="flex gap-2 items-center justify-between">
              <p>Estimated for</p>{" "}
              <h4 className="text-green-30 text-lg">United Kingdom</h4>
            </div>
          </div>
          <div className="border border-gray-30 px-2 py-4">
            <hr />
          </div>
          <div className="border border-gray-30 p-2">
            <div className="flex gap-2 items-center justify-between">
              <p>Total</p>{" "}
              <h4 className="text-green-30 text-lg">
                ₦
                {totalCartValue.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </h4>
            </div>
          </div>
          <br />

          <Button type="button" variant="btn_green">
            Proceed To CheckOut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSubtotal;
