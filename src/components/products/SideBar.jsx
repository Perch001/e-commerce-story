import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Categories from "../ui/Categories.jsx";
import FilterProduct from "../ui/FilterProduct.jsx";
import Divider from "../ui/Divider.jsx";
import FilterPrice from "../ui/FilterPrice.jsx";

const SideBar = () => {
    return (
        <div className="my-5 shadow-lg inset-shadow-xs p-10 h-[100%] w-[350px]">
            <Categories />
            <Divider width="100%"/>
            <FilterProduct />
            <FilterPrice />
        </div>

    )
};

export default SideBar;