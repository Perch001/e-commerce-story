import React from 'react';
import BasketList from "./BasketList.jsx";
import BasketCheck from "./BasketCheck.jsx";

const BasketPage = () => {
    return (
        <div className="container mx-auto flex justify-between">
            <div>
                <BasketList />
                <BasketList />
                <BasketList />
            </div>
            <BasketCheck />
        </div>
    );
};

export default BasketPage;