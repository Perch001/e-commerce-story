import React, {memo} from 'react';
import {Rate} from "antd";
import {useNavigate} from "react-router-dom";
const ProductList = ({id, title, images, brand, price, tags, rating, description}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/shop/product/${id}`)
    }
    return (
        <>
            <div className="p-10 m-5 flex items-center rounded-3xl shadow-lg justify-between mx-auto" onClick={handleClick}>
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
                        <span className="text-2xl">{title}</span>
                    </div>
                    <p className="text-xs mb-5">{brand}</p>
                    <p className="text-wrap text-xs">{description}</p>
                    <div className="flex items-center text-xl mt-10">
                        <Rate defaultValue={rating} disabled />
                        <p className="ml-5">{rating}</p>
                    </div>
                </div>
                <div>
                    <button className="text-xl hover:bg-black hover:text-white border rounded-3xl p-3 cursor-pointer">${price}</button>
                </div>
            </div>
        </>
    );
};

export default ProductList;