
import React from 'react';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout.js";
import Home from "./components/pages/Home.js";
import About  from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import Services from "./components/pages/Services.js";
import Product from "./components/pages/Product.js";
import NoPageFound from "./components/pages/NoPageFound.js";
// import SliderImages from "./components/slider/SliderImages.js";
// import HeaderSlider from './components/slider/HeaderSlider.js';
// import  Profile from "./layout/Profile.js" 
// import UserState from "./components/context/UserStatie.js";
import SignIn from './components/login/SignIn.js';
import SignUp from './components/login/SignUp.js';


    function App() {

      return (
          <div>

<BrowserRouter>       
<Routes>
<Route path="/"  element={<Layout />}  /> 
<Route path=" " element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/services" element={<Services />} />
<Route path="/product" element={<Product />} />
<Route path="/signup" element={<SignUp />} />
<Route path="signin" element={<SignIn />} />
<Route path="*" element={<NoPageFound/>} />
</Routes>

</BrowserRouter>
       </div>
      );
     };

    
    export default App;
    

