import React from 'react';

const Product = ({ imgUrl, name, price, alt }) => (
  <div className="product">
    <img className="image" src={imgUrl} alt={alt} />
    <h2 className="name">{name}</h2>
    <p className="text">{price}$</p>
    <button className="btn" type="button">
      Add to cart
    </button>
  </div>
);

export default Product;
