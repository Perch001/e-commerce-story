import React from 'react';
import {useSelector} from "react-redux";
import Card from "../ui/Card";

const ProductList = () => {
    const {products, selectedCategory} = useSelector(state => state.products);
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;
    return (
        <div className="grid grid-cols-4 gap-7">
            {filteredProducts.map((product) => (
                <div key={product.id}>
                    <Card {...product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;