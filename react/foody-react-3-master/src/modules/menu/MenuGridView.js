import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

import MenuCard from './MenuCard';

const MenuGrid = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link to={`${routes.MENU}/${item.id}`}>
          <MenuCard {...item} />
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuGrid;
