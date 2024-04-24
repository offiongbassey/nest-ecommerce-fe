import Button from "@/components/Button";
import DeleteCartItemModal from "@/components/modal/cart/DeleteCartItemModal";
import {
  AddToCartPayload,
  decreamentCartItem,
  increamentCartItem,
  removeItemFromCart,
} from "@/redux/features/cartSlice";
import { AppDispatch } from "@/redux/store";
import DeleteIcon from "@/svg/DeleteIcon";
import StarIcon from "@/svg/StarIcon";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ cart }: { cart: [AddToCartPayload] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const removeItem = () => {
    dispatch(removeItemFromCart(currentId));
    setOpenModal(false);
  };

  const decreaseItem = (id: number) => {
    dispatch(decreamentCartItem(id));
  };

  const increaseItem = (id: number) => {
    dispatch(increamentCartItem(id));
  };

  const handleDelete = (id: number) => {
    setCurrentId(id);
    setOpenModal(true);
    console.log("Id", id);
  };
  return (
    <>
      <DeleteCartItemModal
        openModal={openModal}
        onClose={() => setOpenModal(false)}
        setOpenModal={setOpenModal}
        removeItem={removeItem}
      />
      {cart.map((item) => {
        const { id, name, promo_price, currency, product_images } = item.item;
        return (
          <tr className="border border-gray-20">
            <td className="px-1 py-3">
              <div
                style={{
                  backgroundImage: `url(${
                    product_images?.length > 0 && product_images[0].image_url
                  })`,
                }}
                className="bg-cover bg-center bg-no-repeat px-2 py-14 border border-gray-20 rounded-lg"
              />
            </td>
            <td className="px-4 py-3">
              {name}
              <br />{" "}
              <div className="flex gap-4 items-center py-1">
                {" "}
                <StarIcon className="fill-[#FEC601]" />{" "}
                <span className="text-sm font-[400] text-gray-10">(4.0)</span>
              </div>
            </td>
            <td className="text-xl text-gay-10 px-4 py-3">
              {currency}
              {promo_price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td>
              <div className="flex justify-center items-center text-center gap-4">
                <Button
                  onClick={() => decreaseItem(id)}
                  type="button"
                  variant="btn_green"
                  short={true}
                >
                  -
                </Button>
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
