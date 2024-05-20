import React from 'react'
import  Header  from "../components/header/Header.js";
import  Footer from "../components/footer/Footer.js";
import{ Outlet }from "react-router-dom";
import Info from "../components/pages/Info.js";
import Community from "../components/pages/Community.js";
import AboutCompany from "../components/pages/AboutCompany.js";
import Employees from "../components/pages/Employees.js";
import VideoPlayer from "../components/videoplayer/VideoPlayer.js"
import AudioPlayer from '../components/audioplayer/AudioPlayer.js';
import AgoraCall from "../components/videocall/AgoraCall.js";
import Map from '../components/maps/Map.js';
import "../components/maps/Map.css";

const Layout = () => {


  const audioSrc = 'https://dl2.djring.com/sd2.djjohal.com/128/519628/After%20Death(DJJOhAL.Com).mp3';
  const audioName = 'After death';
  const thumbnailSrc = 'https://img.freepik.com/free-psd/music-concert-youtube-cover-template_23-2149959361.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=ais_user';

  return (
    <div>
      <Header />
      <Outlet />
      <Community />
      <AboutCompany />
      <Info />
      <Employees />
         <VideoPlayer />
         <AudioPlayer audioSrc={audioSrc} audioName={audioName} thumbnailSrc={thumbnailSrc} />
         <AgoraCall />
         <div className="map">
      <h1>Google Maps with Markers in India</h1>
      <Map />
    </div>
      <Footer/>
    
     
    
    </div>
  )
}

export default Layout;
