import React, {Fragment} from 'react';

const Dishes = ({title, children}) => (
    <Fragment>
    <h2>{title}</h2>        
    {children}   
    </Fragment>
)

export default Dishes;