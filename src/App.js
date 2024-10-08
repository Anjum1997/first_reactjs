
import React from 'react';
import {Routes, Route} from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext.js";
import Layout from "./layout/Layout.js";
import Home from "./components/router/Home.js";
import About  from "./components/router/About.js";
import Contact from "./components/router/Contact.js";
import Services from "./components/router/Services.js";
import Product from "./components/router/Product.js";
import NoPageFound from "./components/pages/NoPageFound.js";
import SignIn from './components/login/SignIn.js';
import SignUp from './components/login/SignUp.js';
 import ForgotPassword from "./components/login/ForgotPassword.js";
 import ResetPassword from "./components/login/ResetPassword.js";
import Notification from './components/firebase/Notification.js';
import CartPage from './components/productcart/CartPage.js';
import Modal from './components/modals/Modal.js';
import SingleProductPage from "./components/productcart/SingleProductPage.js"
 import ViewPdf from './components/pdf/ViewPdf.js';
 import VideoPlayer from './components/videoplayer/VideoPlayer.js';
 import AgoraCall from './components/videocall/AgoraCall.js';


    function App() {

      const pdfUrl = 'https://dl.ebooksworld.ir/books/Beginning.ReactJS.Foundations.Chris.Minnick.Wiley.9781119685548.EBooksWorld.ir.pdf';

    
      return (
          <>
  <AuthContextProvider>
<Routes>
<Route path="/"  element={<Layout />}  /> 
<Route path="/home"  element={<Home />}  /> 
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/services" element={<Services />} />
<Route path="/product" element={<Product />} />
<Route path="/product/:productId" element={<SingleProductPage />} />
 <Route path="/cart" element={<CartPage />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/signin" element={<SignIn />} />
<Route path="/forgotpassword" element={<ForgotPassword />} />
 <Route path="/resetpassword/:token" element={<ResetPassword />} /> 
 <Route path="/modal" element={<Modal  />} /> 
 <Route path="/pdf" element={<ViewPdf pdfUrl={pdfUrl} />} />
 <Route path="/video" element={<VideoPlayer />} />
 <Route path="/agoracall" element={<AgoraCall />} />
<Route path="*" element={<NoPageFound/>} />
</Routes>
<Notification />
</AuthContextProvider>  
       </>
      );
     };

    
    export default App;
    

