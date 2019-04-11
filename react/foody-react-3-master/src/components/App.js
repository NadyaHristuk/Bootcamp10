import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from './AppHeader/AppHeader';
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import AccountPage from '../pages/Account';
import OrderHistoryPage from '../pages/OrderHistory';
import MealPlannerPage from '../pages/Planner';

import routes from '../configs/routes';

const App = () => (
  <div>
    <AppHeader />

    <Switch>
      <Route exact path={routes.MENU} component={MenuPage} />
      <Route path={routes.MENU_ITEM} component={MenuItemPage} />
      <Route path={routes.ABOUT} component={AboutPage} />
      <Route path={routes.CONTACT} component={ContactPage} />
      <Route path={routes.DELIVERY} component={DeliveryPage} />
      <Route path={routes.ACCOUNT} component={AccountPage} />
      <Route path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
      <Route path={routes.PLANNER} component={MealPlannerPage} />
    </Switch>
  </div>
);

export default App;
