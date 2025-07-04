import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth-slice/index.js";
import adminProductSlice from "./admin/product-slice";
import adminOrderSlice from "./admin/order-slice";
import shopProductsSlice from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";
import shopAddressSlice from "./shop/address-slice";
import shopOrderSlice from "./shop/order-slice";
import shopSearchSlice from './shop/search-slice';

const store = configureStore({
    reducer: {
        auth : authReducer,
        adminProducts : adminProductSlice,
        adminOrder : adminOrderSlice,
        shopProducts : shopProductsSlice,
        shopCart: shopCartSlice,
        shopAddress : shopAddressSlice,
        shopOrder : shopOrderSlice,
        shopSearch : shopSearchSlice
    }
})

export default store;