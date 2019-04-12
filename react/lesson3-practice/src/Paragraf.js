import React from 'react';
import style from './Paragraf.module.css';

const Paragraf= ({key, text}) => (
<p className={style.text} key={key}>{text}</p>
);

export default Paragraf;
