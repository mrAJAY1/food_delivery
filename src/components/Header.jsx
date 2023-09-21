import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} width="100%" height="100%" alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/" className="text-decoration-none">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="text-decoration-none">
            About Us
          </Link>
        </li>
        <li>
          <Link to="contact" className="text-decoration-none">
            Contact Us
          </Link>
        </li>
        <li>Cart</li>
        <li>
          <button
            className="login-button"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}>
            {buttonName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
