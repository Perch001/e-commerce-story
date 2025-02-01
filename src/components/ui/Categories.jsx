import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Categories = () => {
    const categories = useSelector((state) => state.categories.categories);
    const [showAll, setShowAll] = useState(false);
    const visibleCategories = showAll ? categories : categories.slice(0, 5)
    return (
        <div>
            <h3 className="text-lg font-semibold mb-5">Categories</h3>
            {visibleCategories.map((cat, index) => (
                <div key={index} className="flex">
                    <p className="m-2 text-gray-500">{cat.name}</p>
                </div>
            ))}
            {categories.length > 5 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md transition-all hover:bg-blue-600"
                >
                    {showAll ? "Hide all" : "Show all"}
                </button>
            )}
        </div>
    );
};

export default Categories;