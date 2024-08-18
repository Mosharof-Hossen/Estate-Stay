import {  useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="p-5 space-y-8">
            <div className="text-center space-y-4">
                <h1 className="md:text-5xl text-3xl  font-bold"> Listings Categories</h1>
                <p className="text-gray-500">Explore various opportunities with all information you need. It is your future.</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {
                    categories.map((category=><Category key={category.id} category={category}></Category>))
                }
            </div>
        </div>
    );
};

export default Categories;