import React, { Component, createContext } from 'react';
import userInfo from '../user-info.json';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
  onSignIn: () => null,
  onSignOut: () => null
});

export default class AuthContextProvider extends Component {
  static Consumer = AuthContext.Consumer;

  state = {
    isAuthenticated: false,
    user: {}
  };

  onSignIn = x => {
    this.setState({
      isAuthenticated: true,
      user: userInfo
    });
  };

  onSignOut = () => {
    this.setState({
      isAuthenticated: false,
      user: {}
    });
  };

  render() {
    const { isAuthenticated, user } = this.state;

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          user,
          onSignIn: this.onSignIn,
          onSignOut: this.onSignOut
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
