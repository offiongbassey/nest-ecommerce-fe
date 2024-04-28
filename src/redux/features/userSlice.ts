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

const AUTH_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/customer`;

export const registerUser = createAsyncThunk("auth/register", async(values: {}, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${AUTH_ENDPOINT}/signup`, values);
        toast.success(response.data.message);

        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            })
        }else {
            toast.error("An unexpected error occured");
        }
        console.log("err ", error_message)
        return rejectWithValue(error_message);
    }
});

export const loginUser = createAsyncThunk("auth/login", async(values: {}, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${AUTH_ENDPOINT}/login`, values);
        toast.success(response.data.message);

        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            })
        }else{
            toast.error("An unexpected error occured")
        }
        return rejectWithValue(error_message);
    }
});

export const logoutUser = createAsyncThunk("auth/logout", async(token: string, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${AUTH_ENDPOINT}/logout`, {
            headers: {
                token
            }
        });
        toast.success(response.data.message);
        console.log("Logedout", response.data);

        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            })
        }else {
            toast.error("An unexpected error occured")
        }

        return rejectWithValue(error_message);
    }
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(registerUser.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = action.payload.data;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(loginUser.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = action.payload.data;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(logoutUser.pending, (state, action) => {
            state.status = "pending"
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = initialState.user;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.status = "failed";
            state.user = initialState.user;
            state.error = action.payload;
        })
    }
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;