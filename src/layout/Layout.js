import React from 'react'
import  Header  from "../components/header/Header.js";
import  Footer from "../components/footer/Footer.js";
import{ Outlet }from "react-router-dom";
import Info from "../components/pages/Info.js";
import Community from "../components/pages/Community.js";
import AboutCompany from "../components/pages/AboutCompany.js";
import Employees from "../components/pages/Employees.js";
import VideoPlayer from "./VideoPlayer.js"





const Layout = () => {
  return (
    <div>
     
      <Header />
      <Outlet />
      <Community />
      <AboutCompany />
      <Info />
      <Employees />
         <VideoPlayer />
      <Footer/>
    
     
    
    </div>
  )
}

export default Layout;
