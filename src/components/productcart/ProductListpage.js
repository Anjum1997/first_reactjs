
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux-toolkit/slices/productsSlice';
import "./productCartPage.css";


const ProductListPage = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (

    <>
    <h2 className='product-heading'>Product Store</h2>
    <div className="product-list">
      {products.map(product => (
        <div className="product-item" key={product.id}>
        <Link to ={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
          <button  className = "product-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductListPage;









// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ProductPage from './ProductPage';
// import { setProducts } from '../../redux-toolkit/slices/productsSlice';
// import axios from 'axios';
// import './productCartPage.css';
// 
// const ProductListPage = () => {
//   const [loading, setLoading] = useState(true);
//   const products = useSelector(state => state.products);
//   const dispatch = useDispatch();
// // 
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         dispatch(setProducts(response.data));
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       }
//     };
// 
//     fetchProducts();
//   }, [dispatch]);
// 
//   if (loading) {
//     return <div>Loading...</div>;
//   }
// 
//   return (
//     <div className="product-list-container">
//       {products.map(product => (
//         <ProductPage key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };
// 
// export default ProductListPage;


// ProductListPage.js
