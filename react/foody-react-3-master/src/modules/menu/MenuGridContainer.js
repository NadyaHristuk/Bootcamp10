import React, { Component } from 'react';
import MenuGrid from './MenuGridView';
import Loader from '../../components/Loader';
import * as API from '../../services/api';

export default class MenuGridContainer extends Component {
  state = { menu: [], loading: false, error: null };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const menu = await API.getAllMenuItems();

      this.setState({ menu, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { menu, loading, error } = this.state;

    return (
      <div>
        {loading && <Loader />}
        {error && <h1>Error</h1>}
        {menu.length > 0 && <MenuGrid items={menu} />}
      </div>
    );
  }
}
