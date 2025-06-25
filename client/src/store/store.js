import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth-slice/index.js";
import adminProductSlice from "./admin/product-slice";
import shopProductsSlice from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";

const store = configureStore({
    reducer: {
        auth : authReducer,
        adminProducts : adminProductSlice,
        shopProducts : shopProductsSlice,
        shopCart: shopCartSlice,
    }
})

export default store;