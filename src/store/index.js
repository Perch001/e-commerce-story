import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice.js";


export default configureStore({
    reducer: {
        products: productSlice,
    }
})
