import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchProductsCategories = createAsyncThunk(
    "products/fetchProductCategories",
    async function fetchProductCategoriesAsync(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://dummyjson.com/products/categories')
            if (!response.ok) {
                throw new Error("Server error");
            }
            //const data = await response.json();
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

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        status: null,
        error: null,
    },
    extraReducers: (builder) => {
      builder
          .addCase(fetchProductsCategories.pending, (state) => {
              state.status = "loading";
              state.error = null;
          })
          .addCase(fetchProductsCategories.fulfilled, (state, action) => {
              state.status = "success";
              state.categories = action.payload;
              state.error = null;
          })
          .addCase(fetchProductsCategories.rejected, setError)
    }
})

export default categoriesSlice.reducer;