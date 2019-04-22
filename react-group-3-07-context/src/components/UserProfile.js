import React from 'react';
import AuthContext from '../contexts/AuthContext';

const UserProfile = () => (
  <AuthContext.Consumer>
    {({ user: { image, name, email, phone } }) => (
      <section>
        <img src={image} alt="user avatar" width="240" />
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </section>
    )}
  </AuthContext.Consumer>
);

export default UserProfile;
