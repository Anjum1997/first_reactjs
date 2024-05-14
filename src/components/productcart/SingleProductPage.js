
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux-toolkit/slices/cartSlice';
import './productCartPage.css';

const SingleProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity }));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : value);
  };

  return (
    <div className="single-product-container">
    {product && (
      <>
        <img src={product?.image} alt={product?.title} />
        <div className="product-details">
          <h2>{product?.title}</h2>
          <p>{product?.description}</p>
          <p>Price: ${product?.price}</p>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </>
    )}
  </div>
);
};

export default SingleProductPage;