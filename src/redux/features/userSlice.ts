import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

type InitialStateAttributes = {
    status: string;
    error: unknown;
    user: UserAttributes
}

type UserAttributes = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    token: string;
    status: string;
    is_verified: boolean;
}

const initialState = {
    status: "",
    error: "",
    user: {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        token: "",
        status: "",
        is_verified: false
    } as UserAttributes
} as InitialStateAttributes;

const AUTH_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/vendor`;

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        }
    }
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;