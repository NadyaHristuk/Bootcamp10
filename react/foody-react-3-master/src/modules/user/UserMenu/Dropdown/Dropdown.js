import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import s from './Dropdown.module.css';

const Dropdown = () => (
  <div className={s.container}>
    <ul>
      {userNavItems.map(item => (
        <li key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
    <button type="button">Logout</button>
  </div>
);

export default Dropdown;
