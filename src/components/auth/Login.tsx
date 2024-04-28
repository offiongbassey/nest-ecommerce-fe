"use client";

import Link from "next/link";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchemaType, loginSchema } from "@/validations/authSchema";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { loginUser } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";
import { addToCartFromLogin } from "@/redux/features/cartSlice";

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { cart } = useAppSelector((state) => state.cart);
    const router = useRouter();

    const new_cart = cart.map((cart_item) => ({ product_id: cart_item.item.id, quantity: cart_item.quantity }));

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver<LoginSchemaType>(loginSchema)
    });

    const onSubmit = async (data: LoginSchemaType) => {
        const response = await dispatch(loginUser(data));
        if(response.payload.success){
            //check if cart is not empty then add local stored cart to db
            if(cart.length > 0){
              await dispatch(addToCartFromLogin({ cart: new_cart, token: response.payload.data.token }));
            }
            router.push("/customer/dashboard");
        }
    }

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="border border-gray-20 rounded-md shadow-xl min-w-52 md:min-w-96 bg-white p-6 my-20 max-w-[380px]">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl text-green-30 font-bold mb-6">Sign In</h2>
            <input 
                type="email"
                className="form-input w-full"
                placeholder="Email address"
                {...register("email")}
                
            />
            <span className="text-red-400">{errors.email?.message}</span>

            <input 
                type="password"
                className="form-input w-full"
                placeholder="Password"
                {...register("password")}
            />
            <span className="text-red-400">{errors.password?.message}</span>
            <br/>
            <br/>
            <Button type="submit" variant="btn_green">Login</Button>
        </form>
        <p className="text-center mt-4">Don't have an account? <Link className="text-green-10" href="/signup">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
