import React from 'react';
import Button from './Button';
import s from './UserMenu.module.css';

const UserMenu = ({
  image = 'https://semantic-ui.com/images/avatar2/large/matthew.png',
  name = 'Nielsen Norman',
  onSignOut = () => null
}) => (
  <section className={s.container}>
    <img className={s.avatar} src={image} alt="user avatar" width="60" />
    <span className={s.name}>{name}</span>

    <Button label="Sign Out" onClick={onSignOut} customClassName={s.button} />
  </section>
);

export default UserMenu;
