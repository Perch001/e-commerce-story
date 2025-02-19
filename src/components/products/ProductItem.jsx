import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Avatar, Divider, Rate} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../../store/productSlice.js";
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

const ProductItem = () => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(true);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product, status, error} = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchOneProduct(id))
    }, [dispatch, id]);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }


    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toISOString().replace("T", " ").substring(0, 16);
    };

    if (status === "loading") {
        return <h2>Loading...</h2>;
    }

    if (status === "failed") {
        return <h2>Error: {error}</h2>;
    }
    return (
        <div className="container mx-auto">
            <div className="flex mt-10">
                <div>
                    <img src={product.images?.[0]} alt={product.title} className="size-[600px] object-contain"/>
                </div>
                <div className="w-[50%] p-10">
                    <p>{product.brand}</p>
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <Divider />
                    <div className="flex items-center">
                        <Rate defaultValue={product.rating} disabled />
                        {/*<p>{product.reviews.length} reviews</p>*/}
                    </div>
                    <div className="mt-15">
                        <p className="text-5xl font-bold">${product.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-10">
                        <p className="font-medium">Availability: {product.stock} in stock</p>
                        <p className="text-gray-500">SCU: {product.sku}</p>
                    </div>

                    <div className="flex mt-10">
                        <div className="mr-10">
                            <button className="bg-gray-300 px-4 py-2" onClick={decrement}>-</button>
                            <span className="border border-gray-300 px-4 py-2.5">{count}</span>
                            <button className="bg-gray-300 px-4 py-2" onClick={increment}>+</button>
                        </div>
                        <div>
                            <button disabled={count <= 0} className={`p-2  rounded-md ${count <= 0 ? "bg-gray-300" : "bg-gray-400 text-white"}`}>ADD TO CARD</button>
                        </div>
                    </div>

                    <div className="flex items-center mt-10">
                        <p className="mr-3">SHARE ON: </p>
                        <img src={facebook} alt={"facebook"} className="size-[3%] mr-3"/>
                        <img src={twitter} alt={"twitter"} className="size-[3%] mr-3"/>
                        <img src={instagram} alt={"instagram"} className="size-[3%] mr-3"/>
                    </div>
                </div>

            </div>
            <div className="w-[60%]">
                <div className="mt-10 border-b-1">
                    <button className={`px-5 py-3 text-xl ${active && "border-b-2"}`} onClick={() => setActive(true)}>Description</button>
                    <button className={`px-5 py-3 text-xl ${active === false && " border-b-2"}`} onClick={() => setActive(false)}>Reviews</button>
                </div>
                {active ?
                    <div className="pt-10 text-xl text-gray-700">
                        {product.description}
                    </div>
                    :
                    <div>
                        {product.reviews.map(review => (
                            <div key={review.id} className="my-10 mx-4">
                                <div className="flex">
                                    <Avatar size={64}/>
                                    <div className="ml-5">
                                        <div className="mb-5">
                                            <p className="text-md">{review.reviewerName}</p>
                                            <p className="text-md text-gray-500">{review.reviewerEmail}</p>
                                            <p className="mt-2 text-xs text-gray-500">{formatDate(review.date)}</p>
                                        </div>
                                        <Rate defaultValue={review.rating} disabled/>
                                        <p className="mt-2">{review.comment}</p>
                                    </div>
                                </div>
                                <Divider />
                            </div>
                        ))}
                    </div>
                }

            </div>

        </div>
    );
};

export default ProductItem;