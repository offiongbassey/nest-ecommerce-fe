import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

 type CartItemAttributes = {
    id: number;
    name: string;
    currency: string;
    promo_price: number;
    regular_price: number;
    slug: string;
    product_colors: [];
    product_images: [{ id: number; image_url: string; }];
    quantity: number;
    quantity_sold: number;
    product_sizes: [];
}

type CartInitialStateAttributes = {
    cart: [AddToCartPayload];
    totalCartValue: number;
    totalCartItem: number;
    error: unknown;
    status: string;
}

export type AddToCartPayload = {
    item: CartItemAttributes;
    quantity: number;
}

const initialState = {
    cart: [],
    totalCartValue: 0,
    totalCartItem: 0,
    error: "",
    status: ""
} as unknown as CartInitialStateAttributes;

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const item = state.cart.find((item) => item.item.id === action.payload.item.id);
            if(item){
                item.quantity = action.payload.quantity;
            }else{
                state.cart.push({...action.payload });
            }
            let totalCartItem: number = 0;
            let totalCartValue: number = 0;
            state.cart.forEach((item) => {
                totalCartItem += item.quantity;
                totalCartValue += item.quantity * item.item.promo_price;
            })
            state.totalCartItem = totalCartItem;
            state.totalCartValue = totalCartValue;
            toast.success("Item added to cart");
        },
        removeItemFromCart: (state, action) => {
            const filtered_cart: any = state.cart.filter((item) => item.item.id !== action.payload);
            
            state.cart = filtered_cart;
            
            let totalCartItem: number = 0;
            let totalCartValue: number = 0;
            state.cart.forEach((item) => {
                totalCartItem += item.quantity;
                totalCartValue += item.quantity * item.item.promo_price;
            })
            state.totalCartItem = totalCartItem;
            state.totalCartValue = totalCartValue;
            
            toast.success("Item removed from cart");
        },
        decreamentCartItem: (state, action) => {
            const cart_item = state.cart.find((item) => item.item.id === action.payload);
            if(cart_item && cart_item.quantity > 1){
                cart_item.quantity -= 1;
            }else{
                return;
            }

            let totalCartItem: number = 0;
            let totalCartValue: number = 0;
            state.cart.forEach((item) => {
                totalCartItem += item.quantity;
                totalCartValue += item.quantity * item.item.promo_price;
            });
            state.totalCartItem = totalCartItem;
            state.totalCartValue = totalCartValue;

            toast.success("Quantity successfully updated");
        },
        increamentCartItem: (state, action) => {
            const cart_item = state.cart.find((item) => item.item.id === action.payload);
            if(cart_item){
                cart_item.quantity += 1;
            }

            let totalCartItem: number = 0;
            let totalCartValue: number = 0;
            state.cart.forEach((item) => {
                totalCartItem += item.quantity;
                totalCartValue += item.quantity * item.item.promo_price;
            });

            state.totalCartItem = totalCartItem;
            state.totalCartValue = totalCartValue;

            toast.success("Quantity successfully updated");
        },
        clearCart: () => {
            return initialState;
        }
    }
});

export const { addToCart, clearCart, removeItemFromCart, decreamentCartItem, increamentCartItem } = cartSlice.actions;

export default cartSlice.reducer;