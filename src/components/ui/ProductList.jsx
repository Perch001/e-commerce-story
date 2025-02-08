import React from 'react';
import {Rate} from "antd";

const ProductList = ({title, images, brand, price, tags, rating, description}) => {
    return (
        <>
            <div className="p-10 m-5 ml-30 flex items-center rounded-3xl shadow-lg w-[80%]">
                <img
                    src={images[0]}
                    alt={title}
                    className="size-[200px] mx-auto object-cover"
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
                    <div>
                        <span className="text-4xl">{title}</span>
                    </div>
                    <span className="text-2xl">{brand}</span>
                    <p className="text-wrap text-xl">{description}</p>
                    <div className="flex items-centers text-xl">
                        <Rate defaultValue={rating} disabled />
                        <p>{rating}</p>
                    </div>
                </div>
                <div>
                    <span className="text-3xl font-bold border-4 rounded-3xl p-3">${price}</span>
                </div>
            </div>
        </>
    );
};

export default ProductList;