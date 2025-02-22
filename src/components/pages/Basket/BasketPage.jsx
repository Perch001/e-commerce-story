import React, {useEffect, useState} from 'react';
import BasketList from "./BasketList.jsx";
import BasketCheck from "./BasketCheck.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardProducts} from "../../../store/CardSlice.js";

const BasketPage = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.card.cards);
    console.log(cards);
    useEffect(() => {
        dispatch(fetchCardProducts())
    })

    return (
        <div className="container mx-auto flex justify-between mt-20">
            <div className="flex-1 mr-40">
                <BasketList />
                <BasketList />
                <BasketList />
            </div>
            <BasketCheck />
        </div>
    );
};

export default BasketPage;