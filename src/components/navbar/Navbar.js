import React from 'react';
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Product</NavLink>
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
