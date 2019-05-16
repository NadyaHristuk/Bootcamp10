import React from "react";
import css from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = props => (
  <div>
    {console.log("Users", props)}
    <NavLink
      to={`${props.path}${props.id}`}
      className={css.user}
      activeClassName={css.userActive}
    >
      {props.name}
    </NavLink>
  </div>
);
export default Users;
