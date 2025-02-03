import React from 'react';
import {useSelector} from "react-redux";
import Card from "../ui/Card";

const ProductList = () => {
    const products = useSelector(state => state.products.products);
    const categoryProducts = useSelector(state => state.products.categoryProduct);
    const viewProducts = categoryProducts.length < 1 ? products : categoryProducts;
    return (
        <div className="grid grid-cols-4 gap-7">
            {viewProducts.map((product) => (
                <div key={product.id}>
                    <Card {...product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;