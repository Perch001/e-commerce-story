import React from 'react';
import {useSelector} from "react-redux";
import Card from "../ui/Card";

const ProductGridView = () => {
    const products = useSelector(state => state.products.products);
    const categoryProducts = useSelector(state => state.products.categoryProduct);
    const viewProducts = categoryProducts.length < 1 ? products : categoryProducts;
    return (
        <div className="grid grid-cols-2 gap-4">
            {viewProducts.map((product) => (
                <div key={product.id}>
                    <Card {...product} />
                </div>
            ))}
        </div>
    );
};

export default ProductGridView;