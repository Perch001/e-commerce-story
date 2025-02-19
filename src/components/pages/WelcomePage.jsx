import React from 'react';
import NavBar from "./NavBar.jsx";
import SideBar from "../products/SideBar.jsx";
import ProductGridView from "../products/ProductGridView.jsx";
import ProductListView from "../products/ProductListView.jsx";
import {useView} from "../../App.jsx";
import GridViewSVG from "../assets/apps.svg"
import ListViewSVG from "../assets/menu-burger.svg"
const WelcomePage = () => {
    const {isGridView, GridView , ListView} = useView();
    return (
        <>

        </>
    );
};

export default WelcomePage;