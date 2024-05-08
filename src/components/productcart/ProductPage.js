import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log(response);
        setProducts(response.data.products);

      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} />
              <span>{product.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
