import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Categories from "../ui/Categories.jsx";

const SideBar = () => {
    return (
        <div className="my-5 shadow-lg inset-shadow-xs p-10 h-[100%] w-[350px]">
            <Categories />
        </div>

    )
};

export default SideBar;