"use client";

import { useForm } from "react-hook-form";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchemaType, signupSchema } from "@/validations/authSchema";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { registerUser } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver<SignupSchemaType>(signupSchema)
    });

    const onSubmit = async (data: SignupSchemaType) => {
        console.log("Data ", data);
        const response = await dispatch(registerUser(data));
        if(response.payload?.success){
            router.push("/customer/dashboard");
        }
    }
  return (
    <div className="flex items-center justify-center bg-white">
        <div className="border border-gray-20 rounded-md shadow-xl min-w-52 md:min-w-96 bg-white p-6 my-20 max-w-[380px]">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl text-green-30 font-bold mb-6">Create An Account</h2>
            <input 
                type="text"
                className="form-input w-full"
                placeholder="First Name"
                {...register("first_name")}
            />
            <span className="text-red-400">{errors?.first_name?.message}</span>

            <input 
                type="text"
                className="form-input w-full"
                placeholder="Last Name"
                {...register("last_name")}
            />
            <span className="text-red-400">{errors?.last_name?.message}</span>

            <input 
                type="number"
                className="form-input w-full"
                placeholder="Phone Number"
                {...register("phone")}
            />
            <span className="text-red-400">{errors?.phone?.message}</span>

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
            <Button type="submit" variant="btn_green">Create Account</Button>
            </form>
            <p className="text-center mt-4">Already have an account? <Link className="text-green-10" href="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Signup


