import React from 'react';
import MenuItem from '../modules/menu/MenuItemContainer';

const MenuItemPage = ({ match }) => (
  <div>
    <MenuItem id={match.params.id} />
  </div>
);

export default MenuItemPage;
