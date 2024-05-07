
 import React from 'react';
 import "./Footer.css";
 import { Link } from 'react-router-dom';
 
 const Footer = () => {
     return (
         <>
             <div className="fsection">
           <div className="fcontainer">
               <div className="footer_">
                   <div className="left_">
       <h2>A@Mishra</h2>
       <p>thanks for giving this wonderful oppotunities to boost my carrier and helping me in achieving my goal.</p>
       <div className="footer-icons">
        <ul>
            <li> <i className="fa-brands fa-facebook"></i></li>
            <li>  <i className="fa-brands fa-twitter"></i></li>
            <li> <i className="fa-brands fa-instagram"></i></li>
            <li>  <i className="fa-brands fa-telegram"></i></li>
           </ul>
       </div>
   </div>
   <div className="list_items">
       <h2>Quick Links</h2>
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
         </div>
         <div className="info">
             <h2>contact_info</h2>
             <p><i className="fa-solid fa-phone-volume"></i> +92 3121324083</p>
           <p><i className="fa-solid fa-envelope"></i> anjummishra1997@gmail.com</p>
            <p><i className="fa-solid fa-paper-plane"></i> mohali,punjab.</p>
         </div>
                     </div>
          
             <div className='Last'>
                 <p>Design By Anjum Mishra</p>
             </div>
             </div>
             </div>
         </>
     );
 };
 
 export default Footer
