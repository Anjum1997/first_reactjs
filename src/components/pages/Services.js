

import React from 'react';
import "./Services.css";
import photo from "../../assets/image/photo.jpg";
import photo1 from "../../assets/image/photo1.jpg";
import photo2 from "../../assets/image/photo2.jpg";
import photo3 from "../../assets/image/photo3.jpg";

const Services = () => {
  return (
    <div className='section4'>
      <div className="image">
      <div className="image_heading">
       <h1>our trusted employees</h1>
       </div>
       <div className="image_group">
       <div className="group_">
        <div className="group">
          <img src={photo} alt="naturral" className='source'/>
          </div>
          <div className="details">
            <p>name:Anamika sharma<br/>
            position:mern stack intern</p>
            </div>
           
        <div className="icons-list">
          <ul>
           <li><i className="fa-brands ic fa-google"></i></li> 
           <li><i className="fa-brands ic fa-square-instagram"></i></li>
           <li><i className="fa-brands ic fa-linkedin"></i></li>
           <li><i className="fa-brands  ic fa-youtube"></i></li>
          </ul>
          </div>  
        </div>


       <div className="group_">
        <div className="group">
          <img src={photo1} alt="naturral" className='source'/>
          </div>
          <div className="details">
            <p>name:roshni malik<br/>
            position:full stack intern</p>
</div>
        <div className="icons-list">
          <ul>
          <li><i className="fa-brands ic fa-google"></i></li> 
           <li><i className="fa-brands ic fa-square-instagram"></i></li>
           <li><i className="fa-brands ic fa-linkedin"></i></li>
           <li><i className="fa-brands ic fa-youtube"></i></li>
          </ul>
        </div>
        </div>
        <div className="group_">
        <div className="group">
          <img src={photo2} alt="naturral" className='source'/>
          </div>
          
          <div className="details">
            <p>name:abhimanyu singh<br/>
            position:mern stack intern</p>
           </div>
        <div className="icons-list">
          <ul>
          <li><i className="fa-brands ic fa-google"></i></li> 
           <li><i className="fa-brands ic fa-square-instagram"></i></li>
           <li><i className="fa-brands ic fa-linkedin"></i></li>
           <li><i className="fa-brands ic fa-youtube"></i></li>
          </ul>
        </div>
       </div>

       <div className="group_">
        <div className="group">
          <img src={photo3} alt="naturral" className='source'/>
          </div>
          <div className="details">
            <p>name:prithvi sharma<br/>
            position:php developer</p>
</div>
        <div className="icons-list">
          <ul>
          <li><i className="fa-brands ic fa-google"></i></li> 
           <li><i className="fa-brands ic fa-square-instagram"></i></li>
           <li><i className="fa-brands ic fa-linkedin"></i></li>
           <li><i className="fa-brands ic fa-youtube"></i></li>
          </ul>
        </div>
        </div>


       </div>
       </div>
       </div>

  )
}

export default Services;
