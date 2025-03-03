import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ✅ Добавляем товар в корзину
export const addToCard = createAsyncThunk(
    "card/addToCard",
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
            return await response.json();
        } catch (error) {
            return rejectWithValue({ message: error.message });
        }
    }
);

// ✅ Удаляем товар из корзины
export const deleteProduct = createAsyncThunk(
    "card/deleteProduct",
    async function (id, { rejectWithValue }) {
        try {
            const response = await fetch(`https://db58a26eb1ef8e43.mokky.dev/carts/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Ошибка сервера");
            }
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// ✅ Загружаем корзину
export const fetchCardProducts = createAsyncThunk(
    "card/fetchCardProducts", // Исправили название
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch("https://db58a26eb1ef8e43.mokky.dev/carts");

            if (!response.ok) {
                throw Error(response.statusText);
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Функция для обработки ошибок
const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
};

// ✅ Создаем `slice`
const cardSlice = createSlice({
    name: "card",
    initialState: {
        cards: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // 🔹 Загружаем корзину
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
            // 🔹 Удаляем товар
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.cards = state.cards.filter(card => card.id !== action.payload);
            })
            // 🔹 Добавляем товар
            .addCase(addToCard.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addToCard.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.cards.push(action.payload);
            })
            .addCase(addToCard.rejected, setError);
    }
});

export default cardSlice.reducer;
