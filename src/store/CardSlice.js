import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



export const fetchCardProducts = createAsyncThunk(
    "fetchCardProducts",
    async function fetchCardProductsAsync(_, {rejectWithValue}) {
        try {
            const response = await fetch("https://db58a26eb1ef8e43.mokky.dev/carts")

            if(!response.ok){
                throw Error(response.statusText);
            }
            const data = await response.json();

        }catch (error){
            return rejectWithValue(error.message);
        }
    }
)
const setError = (state, action) => {
    state.status = "rejected"
    state.error = action.payload;
}

const cardSlice = createSlice({
    name: "card",
    initialState: {
        cards: [],
        status: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCardProducts.pending, (state) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(fetchCardProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.cards = action.payload;
                state.error = null;
            })
            .addCase(fetchCardProducts.rejected, setError)
    }
})

export default cardSlice.reducer;