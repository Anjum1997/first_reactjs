import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './LoginForm.css';
import logo1 from "../../assets/image/logo.png";

const  LoginForm =()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };

  return (
      
   <div className='form_'>
    <div className="login-form">
      <img src= {logo1} alt="Logo" className="log" /> 
      <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fas fa-envelope"></i>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className=" fas fa-eye-slash"></i> 
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="social-media-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i> 
          <i className="fab fa-google"></i> 
        </div>
        <div className="form-group">
          <button type="button" className='login-button' onClick={handleLogin}>submit</button> 
        </div>
     
    </div>
    </div>
  );
}

export default LoginForm;
