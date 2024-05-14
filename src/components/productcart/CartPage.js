
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux-toolkit/slices/cartSlice';
import './productCartPage.css';
import Navbar from '../navbar/Navbar';

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  return (
    <>
    <Navbar />
    <div className="cart-container">
      <h2>Cart</h2>
      <ul className="cart-items">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total Price: ${getTotalPrice()}</h3>
        <button className="pay-button">Pay Now</button>
      </div>
    </div>
    </>
  );
};

export default CartPage;
