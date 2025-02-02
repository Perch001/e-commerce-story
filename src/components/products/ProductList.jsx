import React from 'react';
import {useSelector} from "react-redux";
import Card from "../ui/Card";

const ProductList = () => {
    const products = useSelector(state => state.products.products);
    return (
        <div className="grid grid-cols-4 gap-7">
            {products.map((product) => (
                <div key={product.id}>
                    <Card {...product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;