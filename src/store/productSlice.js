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

const setError = (state, action) => {
    state.status = "rejected"
    state.error = action.payload;
}
const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
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
    }
})

export default productSlice.reducer;
