
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByType } from '../../redux-toolkit/slices/productsSlice';
import './Sidebar.css'; 

const Sidebar = () => {
  const dispatch = useDispatch();
  const productTypes = useSelector(state => [...new Set(state.products.products.map(product => product.type))]); 

  const handleTypeClick = (type) => {
    dispatch(filterProductsByType(type));
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">CATEGORIES</h2>
      <ul className="sidebar-list">
        {productTypes.map((type, index) => (
          <li key={index} className="sidebar-item" onClick={() => handleTypeClick(type)}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
