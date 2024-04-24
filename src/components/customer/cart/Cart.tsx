"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import Button from "@/components/Button";
import CartList from "./CartList";
import LongArrowIcon from "@/svg/LongArrowIcon";
import RotateIcon from "@/svg/RotateIcon";
import CartShipping from "./CartShipping";
import CartSubtotal from "./CartSubtotal";
import FooterBanner from "@/components/footer/FooterBanner";
import Link from "next/link";
import { clearCart } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ClearCart from "@/components/modal/cart/ClearCart";

const Cart = () => {
  const { cart, totalCartValue, totalCartItem } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setOpenModal] = useState(false);

  const clearCartItems = () => {
    dispatch(clearCart());
    setOpenModal(false);
  };
  return (
    <>
      <section className="padding-container max-container py-16">
        {cart?.length > 0 ? (
          <>
            <ClearCart
              openModal={openModal}
              onClose={() => setOpenModal(false)}
              setOpenModal={setOpenModal}
              clearCartItems={clearCartItems}
            />
            <h2 className="text-3xl text-green-30 font-[600]">Your Cart</h2>
            <p className="text-gray-10 font-[500] text-sm">{`${
              totalCartItem > 1
                ? `There are ${totalCartItem} items`
                : `There is ${totalCartItem} item`
            }  in your cart`}</p>
            <div className="flex flex-col lg:flex-row gap-10">
              <div>
                <CartList cart={cart} />
                <br />
                <hr />
                <div className="flex gap-2 items-center justify-between mt-6">
                  <Link href="/">
                    <Button type="button" variant="btn_green" short={true}>
                      <LongArrowIcon className="fill-white" /> Continue Shopping
                    </Button>
                  </Link>
                  <Button
                    type="button"
                    onClick={() => setOpenModal(true)}
                    variant="btn_green"
                    short={true}
                  >
                    <RotateIcon className="stroke-white" /> Clear Cart
                  </Button>
                </div>
                <CartShipping />
              </div>
              <CartSubtotal totalCartValue={totalCartValue} />
            </div>
          </>
        ) : (
          <div className=" items-center justify-center flex ">
            <div className="items-center text-center">
              <h4 className="font-bold text-green-30 py-2">
                Your Cart is empty!
              </h4>
              <p className=" text-gray-50 mb-5">
                Browse our categories and discover our best deals!
              </p>
              <Link href="/">
                <Button type="button" variant="btn_green">
                  START SHOPING
                </Button>
              </Link>
            </div>
          </div>
        )}
      </section>
      <FooterBanner image="/footer-banner-1.png" />
    </>
  );
};

export default Cart;
