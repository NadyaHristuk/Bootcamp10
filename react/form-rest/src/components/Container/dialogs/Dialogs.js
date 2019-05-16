import React from "react";
import css from "./Dialogs.module.css";
import Users from "./users/Users";


const Dialogs = (props) => (
<div className={css.usersList}>
<p className={css.paragraph}>Users</p>
    {props.userName.map( items => <Users id={items.id} name={items.name} path={items.path} />)}
  </div>
);

export default Dialogs;