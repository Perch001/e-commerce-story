import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Divider, Rate} from "antd";

const ProductItem = () => {
    const [products, setProducts] = useState([])
    async function fetchProduct(id) {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            setProducts(response.data)
        }catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchProduct(43)
    }, [])
    console.log(products)
    return (
        <div className="flex">
            <div>
                <img src={products.images?.[0]} alt={products.title} className="size-[1000px]"/>
            </div>
            <div className="bg-gray-200">
                <h1>{products.title}</h1>
                <Divider />
                <div className="flex items-center">
                    <p>${products.price}</p>
                    <Rate defaultValue={products.rating} disabled />
                    <p>{products.rating}</p>
                </div>
                <div>
                    <p>Tags:</p>
                    {products.tags}
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