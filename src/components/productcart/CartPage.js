// CartPage.js
import React from 'react';

const CartPage = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
