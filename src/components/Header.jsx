import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} width="100%" height="100%" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
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
