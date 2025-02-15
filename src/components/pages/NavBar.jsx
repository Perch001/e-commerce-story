import React from 'react';
import SearchSVG from '../assets/search.svg'
import ShoppingCard from '../assets/shopping-cart.svg'
const NavBar = () => {
    return (
        <>
            <div className='container mx-auto mt-5 text-xl'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-5xl font-bold mr-10">Lafka</h1>
                        <div className="mt-2">
                            <a href="/" className="mr-4">Home</a>
                            <a href="/" className="mr-4">Shop</a>
                            <a href="/" className="mr-4">About</a>
                            <a href="/" className="mr-4">Blog</a>
                            <a href="/" className="mr-4">Contact</a>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="flex items-center mr-5">
                            <img src={SearchSVG} alt="search" className="size-7"/>
                            <span>Search</span>
                        </div>
                        <div className="flex items-center">
                            <img src={ShoppingCard} alt="Card" className="size-7" />
                            <span>Card(0)</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;