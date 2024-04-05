
import React from 'react';
// import  Profile from "./layout/Profile.js" 
// import UserState from "./components/context/UserStatie.js";
 import Header from "./components/header/Header.js";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/pages/Home.js";
import About  from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import Services from "./components/pages/Services.js";
import Product from "./components/pages/Product.js";
import NoPageFound from "./components/pages/NoPageFound.js";
import LoginForm from './components/login/LoginForm.js';
import SliderImages from "./components/slider/SliderImages.js";
import HeaderSlider from './components/slider/HeaderSlider.js';
 import Detail from './layout/Detail.js';
import Footer from './components/footer/Footer.js';



    function App() {
        
<Routes>
<Route path="/" element={<Home />} />
<Route path="About" element={<About />} />
<Route path="Contact" element={<Contact />} />
<Route path="Services" element={<Services/>} />
<Route path="Product" element={<Product/>} />
<Route path="*" element={<NoPageFound/>} />
</Routes>


      return (
      

        <>
        
       <Navbar/>
      <Header/>
      <LoginForm/>
      <Home/>
      <About/> 
      <Contact/>
      <Services/>
    <Footer/>
<br/>
      <SliderImages/>
      <HeaderSlider/>
      <NoPageFound/>
       <Detail/>

       </>
      );
     };

    
      
    
    export default App;
    

    //  <>
        //  
        // // <UserState>
        // // 
        // //  <Profile/>
        // //  <Header/>
        // //  </UserState>
        //  </>

