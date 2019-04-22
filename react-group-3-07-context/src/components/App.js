import React, { Component } from 'react';
import UserProfile from './UserProfile';
import AppBar from './AppBar';
import AuthContextProvider from '../contexts/AuthContext';

const App = () => (
  <>
    <AuthContextProvider>
      <AppBar />
      <UserProfile />
    </AuthContextProvider>
  </>
);

export default App;
