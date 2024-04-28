import Button from "@/components/Button";
import DeleteCartItemModal from "@/components/modal/cart/DeleteCartItemModal";
import {
  AddToCartPayload,
  addToRemoteCart,
  decreamentCartItem,
  increamentCartItem,
  reduceRemoteCartItem,
  removeItemFromCart,
} from "@/redux/features/cartSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import DeleteIcon from "@/svg/DeleteIcon";
import StarIcon from "@/svg/StarIcon";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface CartItemProps {
  cart: [AddToCartPayload],
  handleDelete: (id: number) => void;
}

const CartItem = ({ cart, handleDelete }: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useAppSelector((state) => state.user.user);


  const decreaseItem = (id: number) => {
    if(token.length > 0){
      dispatch(reduceRemoteCartItem({ product_id: id, token }));
    }else{
    dispatch(decreamentCartItem(id));
    }
  };

  const increaseItem = (id: number) => {
    if(token.length > 0){
      dispatch(addToRemoteCart({ product_id: id, quantity: 1, token }));
    }else{
    dispatch(increamentCartItem(id));
    }
  };

  return (
    <>
      
      {cart.map((item) => {
        const { id, name, promo_price, currency, product_images, slug } = item.item;
        return (
          <tr key={id} className="border border-gray-20">
            <td className="px-1 py-3">
              <Link href={`/product/${slug}`}>
                <div
                style={{
                  backgroundImage: `url(${
                    product_images?.length > 0 && product_images[0].image_url
                  })`,
                }}
                className="bg-cover bg-center bg-no-repeat px-2 py-14 border border-gray-20 rounded-lg"
              />
              </Link>
            </td>
            <td className="px-4 py-3">
            <Link href={`/product/${slug}`}>
              {name}
              <br />{" "}
              <div className="flex gap-4 items-center py-1">
                {" "}
                <StarIcon className="fill-[#FEC601]" />{" "}
                <span className="text-sm font-[400] text-gray-10">(4.0)</span>
              </div>
              </Link>
            </td>
            <td className="text-xl text-gay-10 px-4 py-3">
              {currency}
              {promo_price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td>
              <div className="flex justify-center items-center text-center gap-4">
                {
                    //disable button when quantity is 1
                    item.quantity > 1 ? (
                  <Button
                    onClick={() => decreaseItem(id)}
                    type="button"
                    variant="btn_green"
                    short={true}
                  >
                    -
                  </Button>
                  ) : (
                    <Button type="button" variant="btn_white_outline"> - </Button>
                  )
                }
                <p>{item.quantity}</p>
                <Button
                  onClick={() => increaseItem(id)}
                  type="button"
                  variant="btn_green"
                  short={true}
                >
                  +
                </Button>
              </div>
            </td>
            <td className="text-xl text-green-10 px-4 py-3">
              {currency}
              {(promo_price * item.quantity).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td className="px-4 py-3">
              <Button
                onClick={() => handleDelete(id)}
                type="button"
                variant="btn_white"
              >
                <DeleteIcon className="stroke-gray-10" />
              </Button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CartItem;
