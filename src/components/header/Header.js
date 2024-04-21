 
import React from 'react';
import Navbar from "../navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <>
    <Navbar />
 <div className="section">
  <div className="content">
    <div className="text1">
      <div className="heading">
      <h1>welcome to the company<br/> as a software developer </h1>
      </div>
      <div className="para">
<p>congratulations to all for your dedication and<br/>hard work at every moment for the growth<br/> and development of the company. </p>
      </div>
      <div className="btn_">
                <button type ="button" className="begin">ready to begin...</button>
            </div>
    </div>
  </div>
 </div>
      
    </>
  )
}

export default Header;
