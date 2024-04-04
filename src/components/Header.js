import { LOGO_URL } from "../utils/constants"
const Header = () => {

    let btnName = "Login";

    return(
        <div className="header">
            <div className="logo-container">
                <img src={ LOGO_URL } className="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={() => {
                            btnName = "Logout";
                            console.log(btnName);
                        }
                    }>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;