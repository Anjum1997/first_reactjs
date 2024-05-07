import React, { useState } from 'react';
import './Progressbar.css';

function Progressbar() {
 
  const [products, setProducts] = useState([
    { name: 'marketing', progress: 50 }, 
    { name: 'business', progress: 30 },
    { name: 'social awareness', progress: 70 },
  ]);

 
  const updateProgress = (index, newProgress) => {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].progress = newProgress;
      return updatedProducts;
    });
  };

  return (
    <div className="progress-bar-container">
      {products.map((product, index) => (
        <div key={index} className="progress-item">
          <div className="progress-label">{product.name}</div>
          <div className="progress-wrapper">
            <div
              className="progress"
              style={{ width: `${product.progress}%` }}
            ></div>
          </div>
          <div className="progress-percent">{product.progress}%</div>
          <div className="progress-controls">
        
            <button onClick={() => updateProgress(index, product.progress - 10)}>
              Decrease
            </button>
            <button onClick={() => updateProgress(index, product.progress + 10)}>
              Increase
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Progressbar;
