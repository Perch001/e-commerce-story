import {configureStore} from "@reduxjs/toolkit";
import productsListSlice from "./productsListSlice.js";
import categoriesSlice from "./categoriesSlice.js";
import productSlice from "./productSlice.js";


export default configureStore({
    reducer: {
        products: productsListSlice,
        product: productSlice,
        categories: categoriesSlice,
    }
})
