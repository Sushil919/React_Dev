import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);

        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants) //This is something I Wanted
    };

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