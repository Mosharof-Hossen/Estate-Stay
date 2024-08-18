import { useEffect, useState } from "react";
import ExploreCategoryCard from "./ExploreCategoryCard";


const ExploreCategory = () => {
    const [allCategoryData,setAllCategoryData] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setAllCategoryData(data))
    },[])

    console.log(allCategoryData);
    return (
        <div className="p-5 space-y-10">
            <div className="text-center space-y-4">
                <h1 className="md:text-5xl text-3xl  font-bold">Explore Our Top Listings</h1>
                <p className="text-gray-500">Explore various opportunities with all information you need. It is your future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    allCategoryData?.map((singleData)=><ExploreCategoryCard singleCategory={singleData} key={singleData.id}></ExploreCategoryCard>)
                }
            </div>
        </div>
    );
};

export default ExploreCategory;