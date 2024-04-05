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
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link> 
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
