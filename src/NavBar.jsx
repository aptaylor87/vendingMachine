import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/Donuts">
        Donuts
      </NavLink>
      <NavLink exact to="/Cookies">
        Cookies
      </NavLink>
      <NavLink exact to="/Popcorn">
        Popcorn
      </NavLink>
    </nav>
  );
}

export default NavBar;