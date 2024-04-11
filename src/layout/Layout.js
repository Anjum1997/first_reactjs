import React from 'react'
import  Header  from "../components/header/Header.js";
import  Footer from "../components/footer/Footer.js";
import{ Outlet }from "react-router-dom";
import Info from "../components/pages/Info.js";
import Page from "../components/pagination/Page.js";



const Layout = () => {
  return (
    <div>
     
      <Header/>
      <Outlet/>
      <Info />
      <Page />
      <Footer/>
    </div>
  )
}

export default Layout;
