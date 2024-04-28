import { AddToCartPayload, deleteRemoteCartItem, removeItemFromCart } from "@/redux/features/cartSlice";
import CartItem from "./CartItem";
import DeleteCartItemModal from "@/components/modal/cart/DeleteCartItemModal";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useState } from "react";

const CartList = ({ cart }: { cart: [AddToCartPayload] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const { token } = useAppSelector((state) => state.user.user);

  const removeItem = () => {
    if(token.length > 0){
      dispatch(deleteRemoteCartItem({ product_id: currentId, token}));
    }else{
      dispatch(removeItemFromCart(currentId));
    }
    setOpenModal(false);
  };

  const handleDelete = (id: number) => {
    setCurrentId(id);
    setOpenModal(true);
  };

  return (
    <div className="relative overflow-x-auto text-green-30 font-[600] mt-10">
      <DeleteCartItemModal
        openModal={openModal}
        onClose={() => setOpenModal(false)}
        setOpenModal={setOpenModal}
        removeItem={removeItem}
      />
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
          <CartItem handleDelete={handleDelete} cart={cart} />
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
