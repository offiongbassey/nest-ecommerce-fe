import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userSlice";
import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const userPersistConfig = {
    key: "user",
    storage
}

const cartPersistConfig = {
    key: "cart",
    storage
}

const productPersistConfig = {
    key: "product",
    storage,
    blacklist: ["product"]
}

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        product: productReducer,
        cart: persistedCartReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false
        }),
        devTools: true
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;