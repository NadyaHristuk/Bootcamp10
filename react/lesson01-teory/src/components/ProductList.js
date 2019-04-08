import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <Product
          imgUrl={product.imgUrl}
          name={product.name}
          price={product.price}
          alt=""
        />
      </li>
    ))}
  </ul>
);

export default ProductList;
