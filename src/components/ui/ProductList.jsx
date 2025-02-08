import React from 'react';
import {Rate} from "antd";

const ProductList = ({title, images, brand, price, tags, rating, description}) => {
    return (
        <>
            <div className="p-10 m-5 flex items-center rounded-3xl shadow-lg justify-between w-[80%] mx-auto">
                <img
                    src={images[0]}
                    alt={title}
                    className="size-[200px] object-cover"
                    loading="lazy"
                    decoding="async"
                    width={200}
                    height={200}
                    srcSet={`
                        ${images[0]} 1x,
                        ${images[1] || images[0]} 2x
                    `}
                />
                <div className="ml-5">
                    <div className="mb-5">
                        <span className="text-4xl">{title}</span>
                    </div>
                    <p className="text-2xl mb-5">{brand}</p>
                    <p className="text-wrap text-xl">{description}</p>
                    <div className="flex items-center text-xl mt-10">
                        <Rate defaultValue={rating} disabled />
                        <p className="ml-5">{rating}</p>
                    </div>
                </div>
                <div>
                    <span className="text-3xl hover:bg-black hover:text-white border rounded-3xl p-3">${price}</span>
                </div>
            </div>
        </>
    );
};

export default ProductList;