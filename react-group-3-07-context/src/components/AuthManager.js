import React, { Component } from 'react';
import UserMenu from './UserMenu';
import Button from './Button';
import { AuthContext } from '../contexts/AuthContext';

export default class AuthManager extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    // console.log(this.context);
  }

  render() {
    const { isAuthenticated, user, onSignIn, onSignOut } = this.context;

    return isAuthenticated ? (
      <UserMenu {...user} onSignOut={onSignOut} />
    ) : (
      <Button label="Sign In" onClick={onSignIn} />
    );
  }
}
