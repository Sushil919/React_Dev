import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);
            //Optional chaining : right way to write code
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    return listOfRestaurants.length === 0 ? (<Shimmer /> ) : 
    (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                     value={searchText}
                     onChange={(e)=> {
                        setSearchText(e.target.value);
                     }} 
                    />
                    <button onClick={
                        () => {
                            //filter the restaurant cart and update thr UI
                            //searchText
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.includes(searchText)
                            );
                            setListOfRestaurants(filteredRestaurant);
                        }
                    }>
                        Search
                    </button>
                </div>
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