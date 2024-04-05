import React  from 'react';
import "./About.css";
import image1 from "../../assets/image/dot.png";
import image2 from "../../assets/image/about-01.jpg";
import image3 from "../../assets/image/about-02.jpg";


const About  = () => { 
  return  (

  <div className="section2">
        <div className="container_">
            <div className="heading_">
                <div className="content_">
                    <h1> About Our Company</h1>
                    <p>The Best Digital <br/>Marketing Agency In Town</p>
                </div>
                <div className="content1">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ab fuga laboriosam odio nesciunt sequi, odit itaque inventore. Ducimus deserunt asperiores, perferendis atque aperiam hic maiores voluptate accusamus sed obcaecati officiis consectetur tenetur laboriosam ab voluptates quisquam expedita deleniti.
                    </p>
                </div>
                <div className="content2">
                <div className="list-icons">
                    <ul>
                        <li><i className="fa-solid rs fa-circle-check"></i> &nbsp;SEO Optimization</li>
                        <li><i className="fa-solid rs fa-circle-check"></i>&nbsp;Quick Support</li>
                        <li><i className="fa-solid rs fa-circle-check"></i>&nbsp;User Friendly</li>
                        <li><i className="fa-solid  rs fa-circle-check"></i>&nbsp; Working process</li>
                    </ul>
                </div>
                </div>
    
                    <button type="button" className="btn"><span></span>read more</button>
                 </div>
            <div className="right_">
                <div className="about-image">
                <img src={image1} alt="a" className="dot"/>
            <img src={image2} alt ="b" className="top"/>
            <img src={image3} alt ="c" className="bottom"/>
            </div>
        </div>
    </div>
    </div>


  );
};

export default About;
