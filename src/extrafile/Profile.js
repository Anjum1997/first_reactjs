

import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image2 from '../assets/image/about-02.jpg';
import Contact from "../components/router/Contact";


const CustomPrevArrow = (props) => {
  const {onClick  } = props;
  return <div className="prev-arrow" onClick={onClick}><i className="fa fa-chevron-left"></i></div>;
}

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <div className="next-arrow" onClick={onClick}><i className="fa fa-chevron-right"></i></div>;
}

const Profile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: 20, width: '100%', textAlign: 'center' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{dots}</ul>
      </div>
    ),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <>
      <Navbar />
      <Slider {...settings} className="slider">
        <div className="slide" >
          <div className="overlay">
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
        </div>
        <div className="slide" style={{ backgroundImage: `url(${image2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="overlay">
            <Contact />
            </div>
          </div>
      </Slider>
    </>
  )
}

export default Profile;


// const Header = () => {
//  
//   const a = useContext(UserContext);
// 
//     useEffect(() =>{
//    a.update()
//     } ,[])
// 
//  return (
//    <>
//    <h1 style={{color:"green"}}>
//    MY NAME IS {a.state.name} <br/> address is {a.state.address}<br/> mobile no is {a.state.mobile}.
//    </h1>