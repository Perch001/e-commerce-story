import React, {useState} from 'react';
import {Button, Divider} from "antd";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../../store/CardSlice.js";


const BasketList = ({id, title, price, quantity, thumbnail}) => {
    const [quality, setQuality] = useState(quantity);
    const dispatch = useDispatch();
    const decrement = () => {
        if(quality > 0){
            setQuality(quality - 1);
        }
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <img className="size-[100px]" src={thumbnail} alt="product"/>
                <div className="w-[200px]">
                    <p className="font-bold">{title}</p>
                    <span>Brand</span>
                </div>
                <span className="font-medium">
                    ${price}
                </span>
                <div className="flex items-center justify-between px-5 border rounded-md w-40 h-10">
                    <p>Count</p>
                    <button onClick={decrement}>{"<"}</button>
                    <span>{quality}</span>
                    <button onClick={() => setQuality(quality + 1)}>{">"}</button>
                </div>
                <div className="w-[100px]">
                    <p>${(quality * price).toFixed(2)}</p>
                </div>
                <Button variant="solid" color="danger" onClick={() => dispatch(deleteProduct(id))}>Delete</Button>
            </div>
            <Divider/>
        </div>
    );
};

export default BasketList;