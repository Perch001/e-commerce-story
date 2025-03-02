import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Categories from "../ui/Categories.jsx";
import FilterProduct from "../ui/FilterProduct.jsx";
import Divider from "../ui/Divider.jsx";
import FilterPrice from "../ui/FilterPrice.jsx";
import {Button} from "antd";

const SideBar = () => {
    return (
        <div className="my-5 p-10 w-[300px]">
            <Categories />
            <Divider width="100%"/>
            <FilterProduct />
            <FilterPrice />
            <Button type="primary">Send</Button>
        </div>

    )
};

export default SideBar;