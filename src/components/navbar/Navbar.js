import React  from 'react';
import { Link, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from "../../assets/image/imagelogo.png";
import { useAuthContext } from "../context/AuthContext";
import "./Navbar.css";


const Navbar = () => {
 
  const { user ,signout} = useAuthContext();
  
 const navigate = useNavigate();
 const cart = useSelector(state => state.products.cart);
  const handleButtonClick = () => {
    if (user) {
      handleSignOut();
    } else {
      navigate('/signup');
    }
  };

  const handleSignOut = async () => {
    try {
      await signout();

      navigate('/');
    } catch (error) {
      console.error('Sign-out Error:', error);
    }
  };


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
           
          </li>
         
        </ul>
      
      </nav>
      <div className="shop-icon">
      <button className="login-btn" onClick={handleButtonClick}><span></span>
          {user ? 'Logout' : 'Login'}
        </button>
        <div className="cart-icon">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">{cart.length}</span>
            </Link>
        </div>
       </div>
      </div>
   </div>
  );
};
    
  
    

export default Navbar;
