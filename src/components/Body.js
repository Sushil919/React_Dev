import RestaurantCard from "./RestaurantCard";

const Body = () => {
    let listOfRestaurants = [
        {
            "info": {
            "id": "126289",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "laiyciem5yqr1qbxhfcj",
            "costForTwo": "₹300 for two",
            "cuisines": ["North Indian","Barbecue","Biryani","Kebabs","Mughlai","Desserts"],
            "avgRatingString": "4.3",
            "sla": {
                "deliveryTime": 31,}
                }
        },
        {
            "info" : {
            "id": "305577",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "costForTwo": "₹350 for two",
            "cuisines": ["Pizzas"],
            "avgRatingString": "3.9",
            "sla": {
                "deliveryTime": 31,}
                }
        }
    ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    //Filter Logic
                    listOfRestaurants = listOfRestaurants.filter(
                        (x)=>x.info.avgRatingString>4
                    );
                    console.log(listOfRestaurants);
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