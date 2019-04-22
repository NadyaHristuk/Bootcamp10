import React from 'react';
import AuthManager from './AuthManager';
import s from './AppBar.module.css';

const AppBar = () => (
  <header className={s.container}>
    <AuthManager />
  </header>
);

export default AppBar;
