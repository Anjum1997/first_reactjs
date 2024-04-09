
import React from 'react';
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
// import SliderImages from "./components/slider/SliderImages.js";
// import HeaderSlider from './components/slider/HeaderSlider.js';
// import  Profile from "./layout/Profile.js" 
// import UserState from "./components/context/UserStatie.js";
import Footer from './components/footer/Footer.js';
import Page from './components/pagination/Page.js';
// import Progressbar from './components/progress/Progressbar.js';


    function App() {
        
<Routes>
<Route path="/home"> <Home/></Route>
<Route path="/about" element={<About />} />
<Route path="contact" element={<Contact />} />
<Route path="services" element={<Services/>} />
<Route path="product" element={<Product/>} />
<Route path="*" element={<NoPageFound/>} />
</Routes>


      return (
      

        <div>
        
       <Navbar/>
      <Header/>
      <LoginForm/>
      <Home/>
      <About/> 
      <Contact/>
      <Services/>
    <Footer/>
      <Page/>
      {/* <Progressbar/> */}
   
   
       </div>
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

