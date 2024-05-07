

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "grey" ,height:"6vh",border:"1px solid orrange",borderRadius:"5px",alignItems:"center",justifyContent:"center",zIndex:"1"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "grey" ,height:"6vh",border:"1px solid orange",borderRadius:"5px",alignItems:"center",justifyContent:"center",zIndex:"1" }}
        onClick={onClick}
      />
    );
  }



const HeaderSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider  style={{ width:"800px", height:"370px",margin:"auto",}} {...settings}>
      <div>
        <img  style ={{width:"800px",height:"340px",backgroundRepeat:"no-repeat" ,backgroundPosition:"center",backgroundSize:"cover"}} src="https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcm91c2VsfGVufDB8fDB8fHww" alt="Slide 1" />
    
         </div>
         <div>
        <img style ={{width:"800px",height:"340px",backgroundRepeat:"no-repeat" ,backgroundPosition:"center",backgroundSize:"cover"}} src="https://images.unsplash.com/photo-1561424412-6c2125ecb1cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D" alt="Slide 2" />
      </div>
      <div>
        <img style ={{width:"800px",height:"340px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}} src="https://images.unsplash.com/photo-1584577900047-0890480dcabe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcm91c2VsfGVufDB8fDB8fHww" alt="Slide 3" />
      </div>
      <div>
        <img style ={{width:"800px",height:"340px",backgroundRepeat:"no-repeat" ,backgroundPosition:"center",backgroundSize:"cover"}} src="https://images.unsplash.com/photo-1557430640-73659d27dd30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcm91c2VsfGVufDB8fDB8fHww" alt="Slide 4"/>
      </div>
      <div>
        <img style ={{width:"800px",height:"340px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}} src="https://images.unsplash.com/photo-1617247815841-35c481245e46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcm91c2VsfGVufDB8fDB8fHww" alt="Slide 5"/>
      </div>
      <div>
        <img style ={{width:"800px",height:"340px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}} src ="https://img.freepik.com/premium-photo/vertical-shot-beautiful-sandstone-mountains-trees-near-lake_665346-21126.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph" alt="Slide 6"/>
      </div>
    </Slider>
  );
};

export default HeaderSlider;
