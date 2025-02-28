import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {data} from "react-router-dom";


export const addToCard = createAsyncThunk(
    "products/addToCard",
    async function (product, { rejectWithValue }) {
        try {
            const response = await fetch("https://db58a26eb1ef8e43.mokky.dev/carts/", {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue({ message: error.message });
        }
    }
);
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async function(id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://db58a26eb1ef8e43.mokky.dev/carts/${id}`, {
                method: "DELETE",
            })
            if (!response.ok) {
                throw new Error("Server error");
            }
            return id;
        }catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const fetchCardProducts = createAsyncThunk(
    "fetchCardProducts",
    async function fetchCardProductsAsync(_, {rejectWithValue}) {
        try {
            const response = await fetch("https://db58a26eb1ef8e43.mokky.dev/carts")
            if(!response.ok){
                throw Error(response.statusText);
            }
            const data = await response.json();
            return data;
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
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
        removeCard: (state, action) => {
            state.cards = state.cards.filter(card => card.id !== action.payload)
        }
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
            .addCase(deleteProduct.fulfilled, (state, action) => { // ✅ Удаляем сразу после успешного ответа
                state.cards = state.cards.filter(card => card.id !== action.payload);
            });
    }
})
export const {removeCard, addCard} = cardSlice.actions;
export default cardSlice.reducer;