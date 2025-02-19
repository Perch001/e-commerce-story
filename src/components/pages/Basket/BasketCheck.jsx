import React from 'react';
import {Button, Divider} from "antd";

const BasketCheck = () => {
    return (
        <div className="w-[350px] h-[450px] bg-gray-200">
            <div>
                <p>$2402</p>
            </div>
            <Divider />
            <div>
                <p>USA Dollar</p>
                <p>NDS: 10% : $240</p>
                <p>Promo-code: 0%</p>
            </div>
            <div className="text-end">
                <p>Total price</p>
                <Divider/>
                <Button>Checkout</Button>
            </div>
        </div>
    );
};

export default BasketCheck;