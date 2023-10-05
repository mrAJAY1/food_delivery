import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="flex justify-between items-center px-[11%] shadow-lg">
      <div className="logo-container">
        <img
          className="w-24"
          src={LOGO_URL}
          width="100%"
          height="100%"
          alt="logo"
        />
      </div>
      <ul className="flex gap-10 h-full align-middle font-[500] text-gray-800">
        <li>
          <Link to="/" className="hover:text-green-300 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="hover:text-green-300 transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="contact" className="hover:text-green-300 transition-colors">
            Contact Us
          </Link>
        </li>
        <li>Cart</li>
        <li>
          <button
            className="w-16"
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
