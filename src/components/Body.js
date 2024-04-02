import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    //Filter Logic
                    const filteredData = listOfRestaurants.filter(
                        (res)=>res.info.avgRatingString>4.3
                    );
                    setListOfRestaurants(filteredData);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;