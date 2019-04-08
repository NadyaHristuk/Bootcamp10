import React from 'react';
import Dish from './dish_item/Dish';

const DishesList = ({db}) => (    
    <ul>
        {db.map(item => (
            <li key={item.id}>
                <Dish 
                    name={item.name}
                    descr={item.description}
                    image={item.image}
                    price={item.price}
                />
            </li>
        ))
        }
    </ul>
);

export default DishesList;