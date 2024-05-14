
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductPage from './ProductPage';
import { setProducts } from '../../redux-toolkit/slices/productsSlice';
import axios from 'axios';
import './productCartPage.css';

const ProductListPage = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list-container">
      {products.map(product => (
        <ProductPage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListPage;
