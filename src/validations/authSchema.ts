import * as yup from "yup";

export const signupSchema = yup.object({
    first_name: yup.string().min(1, "First Name is required").required("First Name is required"),
    last_name: yup.string().min(1, "Last Name is required").required("Last Name is required"),
    phone: yup.string().min(10, "Phone Number must be atleast 10 digits").required("Phone Number is required"),
    email: yup.string().email("Invalid email address").required("Email address is required"),
    password: yup.string().min(6, "Password must be atleast 6 characters").required("Password is required")
});

export type SignupSchemaType = yup.InferType<typeof signupSchema>

export const loginSchema = yup.object({
    email: yup.string().email("Email address is required").required("Email address is required"),
    password: yup.string().min(6, "Password must be atleast 6 characters").required("Password is required")
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>