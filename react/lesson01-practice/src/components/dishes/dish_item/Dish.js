import React, {Fragment} from 'react';

const Dish = ({name, descr, image, price}) => (
    <Fragment>
        <h2>{name}</h2>
        <p>{descr}</p>
        <img src={image} alt={name}/>
        <p>{price}$</p>
    </Fragment>
);

export default Dish;


