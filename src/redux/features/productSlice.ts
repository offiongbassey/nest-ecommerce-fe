import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

type ProductAttributes = {
    id: number;
    name: string;
    sub_category: { id: number, name: string, slug: string };
    product_images: [{ id: number, image_url: string}];
    quantity: number;
    quantity_sold: number;
    slug: string;
    store: { id: number, name: string, slug: string };
    regular_price: number;
    promo_price: number;
    product_colors: []; 
    product_sizes: []; 
    newQuantity: number
  }
type ProductDetails = {
    category_id: number;
    sub_category_id: number;
    createdAt: string;
    currency: string;
    description: string;
    id: number;
    name: string;
    product_code: string;
    promo_price: number;
    regular_price: number;
    slug: string;
    status: string;
    tax_rate: string;
    product_colors: [];
    product_images: [{ id: number; image_url: string; }];
    quantity: number;
    quantity_sold: number;
    product_sizes: [];
    category: { id: number, name: string },
    sub_category: { id: number, name: string }
}
type ProductInitialStateAttribuates = {
    product: ProductDetails;
    related_products: [RelatedProductsAttributes];
    best_products: [];
    deals_products: [];
    products: [];
    error: unknown;
    status: string;
}
type RelatedProductsAttributes = {
    id: number; 
    name: string; 
    promo_price: number; 
    slug: string;
    regular_price: number;
    currency: string; 
    product_images: [{ id: number; image_url: string; }] 
}

const initialState = {
    product: {},
    related_products: [{}],
    best_products: [],
    deals_products: [],
    products: [],
    error: "",
    status: ""
} as ProductInitialStateAttribuates

const PRODUCT_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/product`;

export const getProducts = createAsyncThunk("product/all", async(_, thunkAPI) => {
    try {
        const response = await axios.get(`${PRODUCT_ENDPOINT}/random`);
        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if (Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            })
        }else {
            toast.error("An unexpected error occured");
        }
        return thunkAPI.rejectWithValue(error_message);
    }
});

export const getBestProducts = createAsyncThunk("product/best", async(_, thunkApi) => {
    try {
        const response = await axios.get(`${PRODUCT_ENDPOINT}/all`);
       
        return response.data
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
        return thunkApi.rejectWithValue(error_message);
    }
});

export const getDealsProduct = createAsyncThunk("product/deals", async(_, thunkApi) => {
    try {
        const response = await axios.get(`${PRODUCT_ENDPOINT}/sub-category/9?limit=4`);
        
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
        return thunkApi.rejectWithValue(error_message);
    }
});

export const getProductBySlug = createAsyncThunk("product/slug", async(slug: string, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${PRODUCT_ENDPOINT}/${slug}`);
      
    
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

export const getRelatedProducts = createAsyncThunk("product/related", async(slug: string, thunkApi) => {
    try {
        const response = await axios.get(`${PRODUCT_ENDPOINT}/related/${slug}?limit=4`);

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
        return thunkApi.rejectWithValue(error_message);
    }
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    }, 
    extraReducers(builder) {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.status ="succeeded";
            state.products = action.payload.data;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload
        })
        .addCase(getBestProducts.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getBestProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.best_products = action.payload.data.data;
        })
        .addCase(getBestProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload
        })
        .addCase(getDealsProduct.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getDealsProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.deals_products = action.payload.data.data;
        })
        .addCase(getDealsProduct.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getProductBySlug.pending, (state, action) => {
            state.status = "loading";
            state.error = ""
        })
        .addCase(getProductBySlug.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.product = action.payload.data
            state.error = ""
        })
        .addCase(getProductBySlug.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getRelatedProducts.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getRelatedProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.related_products = action.payload.data.data;
        })
        .addCase(getRelatedProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
    }
});

export default productSlice.reducer;