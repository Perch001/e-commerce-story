import React from 'react';
import {useSelector} from "react-redux";
import Card from "../ui/Card.jsx";
import ProductList from "../ui/ProductList.jsx";

const ProductListView = () => {
    const products = useSelector(state => state.products.products);
    const categoryProducts = useSelector(state => state.products.categoryProduct);
    const viewProducts = categoryProducts.length < 1 ? products : categoryProducts;
    return (
        <div className="">
            {viewProducts.map((product) => (
                <div key={product.id}>
                    <ProductList {...product} />
                </div>
            ))}
        </div>
    );
};

export default ProductListView;