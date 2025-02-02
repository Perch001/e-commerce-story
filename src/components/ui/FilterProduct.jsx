import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectUniqueBrands} from "../selectors/selectors.js";
import DownArrow from "./DownArrow.jsx";

const FilterProduct = () => {
    const brands = useSelector(selectUniqueBrands)
    const [showAll, setShowAll] = useState(false)
    const visibleBrands = showAll ? brands : []
    const handleClick = () => {
        setShowAll(!showAll);
    }
    return (
        <>
            <div>
                <p className="font-bold text-xl">Filter by:</p>
                <div className="text-lg mb-5">
                    <button onClick={handleClick} className="w-full mt-5">
                        <div className="flex justify-between items-center pb-5">
                            <h4>Brands</h4>
                            <DownArrow showAll={showAll}/>
                        </div>
                    </button>
                    {visibleBrands.length > 0 && visibleBrands.filter(brand => brand).map((brand, index) => (
                        <div key={index} className="flex items-center ml-5">
                            <input type="checkbox" className="size-[20px]" />
                            <p className="m-2 text-gray-500">{brand}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FilterProduct;