import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  activeLink: {
    color: "coral",
    textDecoration: "none"
  }
};

const Nav = () => (
  <ul>
    <li>
      <NavLink exact activeStyle={style.activeLink} to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={style.activeLink} to="/about">
        About
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={style.activeLink} to="/articles">
        Articles Page
      </NavLink>
    </li>
  </ul>
);

export default Nav;
