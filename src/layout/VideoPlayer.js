
import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'; 

const  VideoPlayer = () =>{
  return (
    <>
    <div className="third-party">
    <h2>Video Player</h2>
    <div className="video-container"> 
      <ReactPlayer
        url="https://youtu.be/PT5Tqr2D1P8?list=RDPT5Tqr2D1P8" 
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
    </div>

    </>
  );
}

export default VideoPlayer;
