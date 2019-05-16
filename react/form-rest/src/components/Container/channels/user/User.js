import React, { Component } from "react";
import css from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = props => (
  <NavLink
    to={`${props.path}${props.id}`}
    className={css.user}
    activeClassName={css.userActive}
  >
    {props.name}
  </NavLink>
);
export default User;
