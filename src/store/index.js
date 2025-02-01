import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice.js";
import categoriesSlice from "./categoriesSlice.js";


export default configureStore({
    reducer: {
        products: productSlice,
        categories: categoriesSlice,
    }
})
