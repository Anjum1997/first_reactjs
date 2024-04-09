import React from 'react'
import  Header  from "../components/header/Header.js";
import  Navbar  from "../components/navbar/Navbar.js";
import  Footer from "../components/footer/Footer.js";



const Layout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Layout;
