import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import Nav from "./Nav";
import ArticlesPage from "../pages/ArticlesPage";
import ItemPage from "../pages/ItemPage";
import "./App.css";

const App = () => (
  <div>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/articles/:id" component={ItemPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </div>
);

export default App;
