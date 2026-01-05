import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/images/logo-white.png";
import mobileLogo from "../assets/images/mobile-logo-white.png";
import { useState } from "react";
const Header = ({ cart }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  let totalQuantity = 0;
  
  cart.forEach((cartItems) => {
    totalQuantity += cartItems.quantity;
  });

  const updateValue = (event) => {
    setSearch(event.target.value);
  };

  const searchProducts = () => {
    navigate(`/?search=${search}`);
  };

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={logo} />
            <img className="mobile-logo" src={mobileLogo} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            value={search}
            onChange={updateValue}
            type="text"
            placeholder="Search"
          />

          <button className="search-button" onClick={searchProducts}>
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/order">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Header;
