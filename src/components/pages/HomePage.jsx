import React, {useContext} from 'react';
import NavBar from "./NavBar.jsx";
import SideBar from "../products/SideBar.jsx";
import ProductGridView from "../products/ProductGridView.jsx";
import ProductListView from "../products/ProductListView.jsx";
import {useView} from "../../App.jsx";
import GridViewSVG from "../assets/apps.svg"
import ListViewSVG from "../assets/menu-burger.svg"
const HomePage = () => {
    const {isGridView, GridView , ListView} = useView();
    return (
        <>
            <NavBar />
            <img
                src="https://t3.ftcdn.net/jpg/03/01/03/56/360_F_301035626_MZ9n24LAELGzKiM2EZRnD8fWgDX8l5dx.jpg"
                className="mx-auto mt-10" alt="backrounts"/>
            <div className="absolute -mt-10 flex bg-white p-10 left-50">
                <SideBar />
                <div>
                    <div className="flex items-center justify-end">
                        <button className={`border p-2 rounded-l-2xl ${isGridView ? "bg-gray-300" : "bg-white"}`} onClick={GridView}>
                            <img className="cursor-pointer" width="30" height="30" src={GridViewSVG} alt="Grid"/>
                        </button>
                        <button className={`border p-2 rounded-e-2xl ${isGridView ? "bg-white" : "bg-gray-300"}`} onClick={ListView}>
                            <img className="cursor-pointer" width="30" height="30"  src={ListViewSVG} alt="List"/>
                        </button>
                    </div>
                    {isGridView ? <ProductGridView /> : <ProductListView />}
                </div>
            </div>



        </>
    );
};

export default HomePage;