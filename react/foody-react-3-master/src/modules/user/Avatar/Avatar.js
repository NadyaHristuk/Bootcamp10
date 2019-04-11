import React from 'react';
import s from './Avatar.module.css';

const Avatar = ({ image = '', width = 60, height = 60 }) => (
  <img
    className={s.avatar}
    src={image}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
