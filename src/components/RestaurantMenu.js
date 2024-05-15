import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []); 
    //Second one is optional arguement, when we keep it empty and doesn't pass anything, then it will be calles again and again the page renders....=>but we want to render it only once -->> so we'll pass an empty array dependency []

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7605545&lng=83.3731675&restaurantId=126289&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if(resInfo === null)
        return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);
    
    return (
        <div className="menu"> 
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                <li>
                    {item.card.info.name}
                </li>
                ))}
            </ul>

        </div>
    );
};

export default RestaurantMenu;