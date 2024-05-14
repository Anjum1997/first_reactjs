
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux-toolkit/slices/cartSlice';
import './productCartPage.css';

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity }));
  };

  const handleQuantityChange = (e) => {
    if (e.target.value < 1) {
      setQuantity(1);
    } else {
      setQuantity(e.target.value);
    }
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
