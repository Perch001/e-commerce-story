import {createSelector} from "@reduxjs/toolkit";

export const selectUniqueBrands = createSelector(
    (state) => state.products.categoryProduct,
    (products) => {
        const brandName = products.map((product) => product.brand);
        return [...new Set(brandName)];
    }
)

