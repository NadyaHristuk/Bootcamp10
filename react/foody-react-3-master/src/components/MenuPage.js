import React, { Component } from 'react';
import MenuGrid from './MenuGrid';
import * as API from '../services/api';

export default class MenuPage extends Component {
  state = { menu: [] };

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
  }

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getMenuItemById(id).then(item => {
      console.log(item);
    });
  };

  handleAddMenuItem = () => {
    const item = {
      name: `New name ${Date.now()}`,
      price: Math.random(),
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
    };

    API.addMenuItem(item).then(newItem => {
      this.setState(state => ({
        menu: [...state.menu, newItem],
      }));
    });
  };

  render() {
    const { menu } = this.state;

    return (
      <div>
        <MenuGrid items={menu} />
      </div>
    );
  }
}
