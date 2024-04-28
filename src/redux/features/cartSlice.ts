import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";
import { headers } from "next/headers";

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

const CART_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/cart`;

export const addToCartFromLogin = createAsyncThunk("cart/login", async(values: { cart: { product_id: number; quantity: number; }[], token: string }, { rejectWithValue }) => {
    try {
        const { cart, token } = values;
    
        const response = await axios.post(`${CART_ENDPOINT}/bulk`, { cart  }, {
            headers: {
                token
            }
        });
    
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
        return rejectWithValue(error_message);
    }
});

export const getCart = createAsyncThunk("cart/get", async(token: string, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${CART_ENDPOINT}`, {
            headers: {
                token
            }
        });
        console.log("Carts", response.data);
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

        return rejectWithValue(error_message);
    }
});

export const addToRemoteCart = createAsyncThunk("cart/remote-add", async(values: { product_id: number, quantity: number, token: string }, { rejectWithValue }) => {
    try {
        const { product_id, quantity, token } = values;
        const response = await axios.post(`${CART_ENDPOINT}/`, { product_id, quantity }, {
            headers: {
                token
            }
        });
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
            toast.error("An unexpected error occured");
        }

        return rejectWithValue(error_message);
    }
});

export const reduceRemoteCartItem = createAsyncThunk("cart/remote-reduce", async(values: { product_id: number, token: string }, { rejectWithValue }) => {
    try {
        const { product_id, token } = values;
        const response = await axios.patch(`${CART_ENDPOINT}/${product_id}`, {}, {
            headers: {
                token
            }
        });
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
            toast.error("An unexpected error occured");
        }
        return rejectWithValue(error_message);
    }
});

export const deleteRemoteCartItem = createAsyncThunk("cart/remote-delete", async(values: { product_id: number, token: string }, { rejectWithValue }) => {
    try {
        const { product_id, token } = values;
        const response = await axios.delete(`${CART_ENDPOINT}/${product_id}`, {
            headers: {
                token
            }
        });

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
            toast.error("An unexpected error occured");
        }
        return rejectWithValue(error_message);
    }
})

export const clearRemoteCart = createAsyncThunk("cart/remote-clear", async(token: string, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${CART_ENDPOINT}/clear`, {}, {
            headers: {
                token
            }
        });
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
            toast.error("An unexpected error occured");
        }
        return rejectWithValue(error_message);
    }
})

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const item = state.cart.find((item) => item.item.id === action.payload.item.id);
            if(item){
                item.quantity += action.payload.quantity;
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
    },
    extraReducers(builder) {
        builder
        .addCase(addToCartFromLogin.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(addToCartFromLogin.fulfilled, (state, action) => {
            state.status = "succeeded";
            //clear cart
            // state.cart =  initialState.cart;
            // state.totalCartItem = initialState.totalCartItem;
            // state.totalCartValue = initialState.totalCartValue;
            let totalCartItem: number = 0;
            let totalCartValue: number = 0;

            const new_cart = action.payload.data.map((cart_item: { cart_product: {}, quantity: number }) => (
                { item: cart_item.cart_product, quantity: cart_item.quantity}));
            
            action.payload.data.forEach((item: { cart_product: { promo_price: number }, quantity: number }) => {
                totalCartItem += item.quantity;
                totalCartValue += item.cart_product?.promo_price * item.quantity;
            })  
            state.cart = new_cart;
            state.totalCartItem = totalCartItem;
            state.totalCartValue = totalCartValue;
        })
        .addCase(addToCartFromLogin.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getCart.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getCart.fulfilled, (state, action) => {
            state.status = "succeeded";
            //add to cart

            let totalCartItem: number = 0;
            let totalCartValue: number = 0;

            const new_cart = action.payload.data.cart_items.map((cart_item: { cart_product: {}, quantity: number }) => (
                { item: cart_item.cart_product, quantity: cart_item.quantity}));
            
            action.payload.data.cart_items.forEach((item: { cart_product: { promo_price: number }, quantity: number }) => {
                totalCartItem += item.quantity;
                totalCartValue += item.cart_product?.promo_price * item.quantity;
            })  
            state.cart = new_cart;
            state.totalCartItem = totalCartItem;
            state.totalCartValue = totalCartValue;
        })
        .addCase(getCart.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(addToRemoteCart.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(addToRemoteCart.fulfilled, (state, action) => {
            state.status = "succeeded";
            //add quantity to cart item if item already exis
            let quantity_difference: number = 0;
            let price_difference: number = 0;
            const cart_item = state.cart.find((_item) => _item.item.id === action.payload.data.cart_product.id);
            if(cart_item){
                quantity_difference = action.payload.data.quantity - cart_item.quantity;
                price_difference = cart_item.item.promo_price * quantity_difference;
                cart_item.quantity = action.payload.data.quantity;
                
                
            }else{
                //add item to cart if it doesn't exist
                const new_cart_item = {
                    item: action.payload.data.cart_product,
                    quantity: action.payload.data.quantity
                }
                quantity_difference = action.payload.data.quantity;
                price_difference = action.payload.data.cart_product.promo_price * quantity_difference;
                state.cart.push(new_cart_item)
            }

            //update totalCartItem and totalCartValue
            state.totalCartItem += quantity_difference;
            state.totalCartValue += price_difference;
        })
        .addCase(addToRemoteCart.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(reduceRemoteCartItem.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(reduceRemoteCartItem.fulfilled, (state, action) => {
            state.status = "succeeded";
            //decrement item quantity
            let quantity_difference:number = 0;
            let price_difference: number = 0;

            const cart_item = state.cart.find((_item) => _item.item.id === action.payload.data.cart_product.id);
            if(cart_item){
                quantity_difference = cart_item.quantity - action.payload.data.quantity;
                price_difference = cart_item.item.promo_price * quantity_difference;
                cart_item.quantity = action.payload.data.quantity;

                //update totalCartItem and totalCartValue
                state.totalCartItem -= quantity_difference;
                state.totalCartValue -= price_difference;
            }

            //
            console.log("Done ", action.payload.data);
        })
        .addCase(reduceRemoteCartItem.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(deleteRemoteCartItem.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(deleteRemoteCartItem.fulfilled, (state, action) => {
            state.status = "succeeded";
            //remove item from cart
            const old_cart_item = state.cart.find(item => item.item.id === Number(action.payload.data));
            if(old_cart_item){
            state.totalCartItem = state.totalCartItem - old_cart_item.quantity;
            state.totalCartValue = state.totalCartValue - (old_cart_item.item.promo_price * old_cart_item.quantity);

            const cart_item = state.cart.findIndex(item => item.item.id === Number(action.payload.data));
            state.cart.splice(cart_item, 1);
            }
           
        })
        .addCase(deleteRemoteCartItem.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(clearRemoteCart.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(clearRemoteCart.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.cart = initialState.cart;
            state.totalCartItem = initialState.totalCartItem;
            state.totalCartValue = initialState.totalCartValue;
            console.log("Dooo-------", action.payload.data);
        })
        .addCase(clearRemoteCart.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
    }
});

export const { addToCart, clearCart, removeItemFromCart, decreamentCartItem, increamentCartItem } = cartSlice.actions;

export default cartSlice.reducer;