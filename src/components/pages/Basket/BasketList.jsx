import React from 'react';
import {Button, Divider} from "antd";

const BasketList = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="size-[100px] bg-black"></div>
                <div>
                    <p>Product name</p>
                    <span>Brand</span>
                </div>
                <span>
                    $200
                </span>
                <div className="flex items-center justify-between px-5 border rounded-md w-40 h-10">
                    <p>Count</p>
                    <button>{"<"}</button>
                    <span>2</span>
                    <button>{">"}</button>
                </div>
                <div>
                    <p>$400</p>
                </div>
                <Button variant="solid" color="danger">Delete</Button>
            </div>
            <Divider/>
        </div>
    );
};

export default BasketList;