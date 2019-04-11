import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li key={item.name}>
        <NavLink to={item.path} className={styles.link}>
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
