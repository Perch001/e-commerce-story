import React, {useState} from 'react';
import DownArrow from "./DownArrow.jsx";
import {Slider} from "antd";

const FilterPrice = () => {
    const [showAll, setShowAll] = useState(false);
    const [value, setValue] = useState([2,50]);
    const handleClick = () => {
        setShowAll(!showAll);
    }

    const handleMinChange = (e) => {
        const newMin = Number(e.target.value);
        setValue([newMin, value[1]])
    }
    const handleMaxChange = (e) => {
        const newMax = Number(e.target.value);
        setValue([value[0], newMax])
    }
    const handleSliderChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="text-lg">
                <button onClick={handleClick} className="w-full">
                    <div className="flex justify-between items-center pb-5">
                        <h4>Price</h4>
                        <DownArrow showAll={showAll}/>
                    </div>
                </button>
                {showAll && (
                    <div>
                        <div className="flex">
                            <input onChange={handleMinChange} type="text" placeholder="0" className="border border-gray-200 w-[50%] px-1" value={value[0]}/>
                            <p className="mx-2">-</p>
                            <input onChange={handleMaxChange} type="text" placeholder="50" className="border border-gray-200 w-[50%] px-1" value={value[1]}/>
                        </div>
                        <div className="">
                            <Slider range defaultValue={value} onChange={handleSliderChange}/>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default FilterPrice;