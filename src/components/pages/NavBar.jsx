import React from 'react';
import SearchSVG from '../assets/search.svg'
import ShoppingCard from '../assets/shopping-cart.svg'
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <div className='container mx-auto mt-5 text-xl'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-5xl font-bold mr-10">Lafka</h1>
                        <div className="mt-2">
                            <NavLink to="/" className="mr-4">Home</NavLink>
                            <NavLink to="/shop" className="mr-4">Shop</NavLink>
                            <NavLink to="/about" className="mr-4">About</NavLink>
                            <NavLink to="/blog" className="mr-4">Blog</NavLink>
                            <NavLink to="/contact" className="mr-4">Contact</NavLink>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="flex items-center mr-5">
                            <img src={SearchSVG} alt="search" className="size-7"/>
                            <span>Search</span>
                        </div>
                        <NavLink to='/basket' className="flex items-center">
                            <img src={ShoppingCard} alt="Card" className="size-7" />
                            <span>Card(0)</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;