import React, { useState } from 'react';
import './Services.css'; 

const Services = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCVC] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
    <h2>credit card  details</h2>
    <form className="payment-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <input type="text" placeholder="Expiry Date" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
      <input type="text" placeholder="CVC" value={cvc} onChange={(e) => setCVC(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Pay Now</button>
    </form>
    </>
  );
};

export default Services;
