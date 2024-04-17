
import React,{useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout.js";
import Home from "./components/router/Home.js";
import About  from "./components/router/About.js";
import Contact from "./components/router/Contact.js";
import Services from "./components/router/Services.js";
import Product from "./components/router/Product.js";
import NoPageFound from "./components/pages/NoPageFound.js";
// import SliderImages from "./components/slider/SliderImages.js";
// import HeaderSlider from './components/slider/HeaderSlider.js';
// import  Profile from "./layout/Profile.js" 
// import UserState from "./components/context/UserStatie.js";
import SignIn from './components/login/SignIn.js';
import SignUp from './components/login/SignUp.js';
import Notification from './components/firebase/Notification.js';




    function App() {
    
      
      return (
          <div>
      
<Routes>
<Route path="/"  element={<Layout />}  /> 
<Route path="/home"  element={<Home />}  /> 
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/services" element={<Services />} />
<Route path="/product" element={<Product />} />
<Route path="/signup" element={<SignUp />} />
<Route path="signin" element={<SignIn />} />
<Route path="*" element={<NoPageFound/>} />
</Routes>

<Notification />
       </div>
      );
     };

    
    export default App;
    

