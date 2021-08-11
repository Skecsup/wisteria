import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar_logo" src={logo} alt="logo" />

      <nav>
        <div className="navbar_link">
          <NavLink
            to="/"
            className="navbar_items"
            exact
            activeClassName="selected"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="navbar_items"
            exact
            activeClassName="selected"
          >
            About Us
          </NavLink>
          <NavLink className="navbar_items" activeClassName="active" to="/">
            Shop
          </NavLink>
          <NavLink className="navbar_items" activeClassName="active" to="/">
            Basket
          </NavLink>
        </div>
      </nav>
      <div className="navbar_buttonContainer">
        <NavLink to="/">
          <button className="navbar_button">Sign in</button>
        </NavLink>
        <NavLink to="/">
          <button className="navbar_button">Sign up</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
