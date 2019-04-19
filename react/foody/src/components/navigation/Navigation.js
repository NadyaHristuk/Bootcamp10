import React from "react";
import style from "./Navigation.module.css";

const Navigation = ({ items }) => (
  <ul className={style.list}>
    {items.map(item => (
      <li key={item}>
        <a className={style.link} href="/">
          {item}
        </a>
      </li>
    ))}
  </ul>
);

export default Navigation;
