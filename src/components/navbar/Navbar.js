import React from 'react';
import { Link} from "react-router-dom";
import logo from "../../assets/image/leber.png";

import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="topbar">
        <div className="logo">
             <img src = {logo} className="logo_" alt="pic"/>
            </div>
            <div className="list">
      <nav>
        <ul>
          <li>  
          <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/product">Product</Link> 
            <ul className="submenu">
            <li><Link to="/product/Product_Card">ProductCard</Link></li>
            <li><Link to ="/product/Producrt_List">ProductList</Link></li>
          
          </ul>
          </li>
        </ul>
      
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..."/>
        <button className="search-btn">Search</button>
      </div>
      <button className="login-btn"><span></span>Login</button>
      </div>
   </div>
  );
};
    
  
    

export default Navbar;
