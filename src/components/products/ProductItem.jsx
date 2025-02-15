import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Divider, Rate} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../../store/productSlice.js";

const ProductItem = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product, status, error} = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchOneProduct(id))
    }, [dispatch, id]);

    if (status === "loading") {
        return <h2>Loading...</h2>;
    }

    if (status === "failed") {
        return <h2>Error: {error}</h2>;
    }
    return (
        <div className="flex">

            <div>
                <img src={product.images?.[0]} alt={product.title} className="size-[500px]"/>
            </div>
            <div className="bg-gray-200">
                <h1>{product.title}</h1>
                <Divider />
                <div className="flex items-center">
                    <p>${product.price}</p>
                    <Rate defaultValue={product.rating} disabled />
                    <p>{product.rating}</p>
                </div>
                <div>

                </div>
            </div>

            {/*{products.images?.map((image, index) => (*/}
            {/*    <img className="size-[500px]" key={index} src={image} alt={products.name} />*/}
            {/*))}*/}
        </div>
    );
};

export default ProductItem;