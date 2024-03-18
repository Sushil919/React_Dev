import React from "react";
import ReactDOM from "react-dom/client";

/** 
 * Header
 * - Logo
 * - Nav Items
 * 
 * Body
 * - Search Bar
 * - Restaurant Container
 *  - Restaurant Cards
 *    - images
 *    - Res_Name, star-rating, cuisine
 * 
 * Footer
 * - copyright
 * - links
 * **/

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://thumbs.dreamstime.com/z/print-food-logo-food-delivery-logo-vector-180672311.jpg" className="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Meghna Foods</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);