import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async function fetchProductsAsync(_, {rejectWithValue}) {
        try {
            const response = await fetch("https://dummyjson.com/products/")
            if(!response.ok) {
                throw new Error("Server error");
            }
            const data = await response.json();
            return data.products;
        }catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


export const fetchProductsFromCategory = createAsyncThunk(
    "products/fetchProductsFromCategory",
    async function fetchProductsFromCategoryAsync(category, {rejectWithValue}) {
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`)
            if(!response.ok) {
                throw new Error("Product form category not found");
            }
            const data = await response.json();
            return data.products;
        }catch (error) {
            return rejectWithValue(error.message);
        }
    }
)



const setError = (state, action) => {
    state.status = "rejected"
    state.error = action.payload;
}
const productsListSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        categoryProduct: [],
        status: null,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, setError)
            .addCase(fetchProductsFromCategory.pending, (state) =>{
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchProductsFromCategory.fulfilled, (state, action) => {
                state.status = "success";
                state.categoryProduct = action.payload;
                state.error = null;
            })
            .addCase(fetchProductsFromCategory.rejected, setError)

    }
})
export const {setSelectedCategoryName} = productsListSlice.actions;
export default productsListSlice.reducer;
