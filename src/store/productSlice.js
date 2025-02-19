import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



export const fetchOneProduct = createAsyncThunk(
    "products/fetchOneProduct",
    async function fetchOneProductAsync(id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if(!response.ok) {
                throw new Error("Product not found");
            }
            return await response.json();
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
    name: "product",
    initialState: {
        product: [],
        status: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneProduct.pending, (state, action) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchOneProduct.fulfilled, (state, action) => {
                state.status = "success";
                state.product = action.payload;
                state.error = null;
            })
            .addCase(fetchOneProduct.rejected, setError)
    }
})

export default productSlice.reducer;