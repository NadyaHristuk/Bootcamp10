import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider, connect } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import App from "./components/App";
import Loader from "./components/Loader";
import * as serviceWorker from "./serviceWorker";
import firebase from "./firebase";
import "semantic-ui-css/semantic.min.css";
import * as actions from "./actions";
import SidePanel from "./components/Container/SidePanelContainer";

class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.props.history.push("/");
        this.props.setUser(user);
      } else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }

  render() {
    return this.props.isLoading ? (
      <Loader />
    ) : (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const mapDispatchToProps = {
  setUser: actions.setUser,
  clearUser: actions.clearUser
};

const mapStateToProps = state => ({
  isLoading: state.user.isLoading
});

const RootWithQAuth = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RootWithQAuth />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
