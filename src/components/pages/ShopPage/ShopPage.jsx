import React from 'react';
import SideBar from "../../products/SideBar.jsx";
import GridViewSVG from "../../assets/apps.svg";
import ListViewSVG from "../../assets/menu-burger.svg";
import ProductGridView from "../../products/ProductGridView.jsx";
import ProductListView from "../../products/ProductListView.jsx";
import {useView} from "../../../App.jsx";

const ShopPage = () => {
    const {isGridView, GridView , ListView} = useView();
    return (
        <div>
            <img
                src="https://t3.ftcdn.net/jpg/03/01/03/56/360_F_301035626_MZ9n24LAELGzKiM2EZRnD8fWgDX8l5dx.jpg"
                className="mt-10 mx-auto" alt="backrounts"/>
            <div className="flex bg-white justify-center p-10">
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
        </div>
    );
};

export default ShopPage;