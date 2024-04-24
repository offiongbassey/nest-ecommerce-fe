import { AddToCartPayload } from "@/redux/features/cartSlice";
import CartItem from "./CartItem";

const CartList = ({ cart }: { cart: [AddToCartPayload] }) => {
  return (
    <div className="relative overflow-x-auto text-green-30 font-[600] mt-10">
      <table className="w-full text-left">
        <thead className="bg-gray-20">
          <tr>
            <th className="px-4 py-3 rounded-s-lg">Product</th>
            <th></th>
            <th className="px-4 py-3">Unit Price</th>
            <th className="px-4 py-3">Quantity</th>
            <th className="px-4 py-3">Subtotal</th>
            <th className="px-4 py-3 rounded-e-lg">Remove</th>
          </tr>
        </thead>
        <tbody>
          <CartItem cart={cart} />
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
