import React  from 'react';
import { Link, useNavigate} from "react-router-dom";
import logo from "../../assets/image/imagelogo.png";
// import { useAuthContext } from '../context/AuthContext';
// import {auth} from "../firebase/firebase.config";
// import SignUp from '../';
// import SignIn from '../SignIn'; 
import "./Navbar.css";

const Navbar = () => {
  // const { user, signout } = useAuthContext();
  // const [isSignupOpen, setIsSignupOpen] = useState(false);
  // const [isSignInOpen, setIsSignInOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick =() =>{
    navigate("/SignUp");
  }
//  const openSignupForm = () => {
//   setIsSignupOpen(true);
// };
// 
// const closeSignupForm = () => {
//   setIsSignupOpen(false);
// };
// 
// const openSignInForm = () => {
//   setIsSignInOpen(true);
// };
// 
// const closeSignInForm = () => {
//   setIsSignInOpen(false);
// };
// 
// const handleLoginButtonClick = () => {
//   if (user) {
//     signout();
//   } else {
//     openSignInForm();
//   }
// };


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
      <div className="search-bar">
        <input type="text" placeholder="Search..."/>
        <button className="search-btn">Search</button>
      </div>
    <button className="login-btn" onClick={handleClick}><span></span>login
          {/* {user ? 'Logout' : 'Login'} */}
        </button>
      </div>
      {/* {isSignupOpen && <SignUp onClose={closeSignupForm} />}
      {isSignInOpen && <SignIn onClose={closeSignInForm} />} */}
   </div>
  );
};
    
  
    

export default Navbar;
