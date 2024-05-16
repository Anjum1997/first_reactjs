import React from 'react';
import './VideoPlayer.css'; 

const VideoPlayer = () => {
  return (
    <>
      <div className="video-player">
        <h2>Video Player</h2>
        <div className="video-container">
          <iframe
            title="YouTube Video"
            width="100%"
            height="100%"
            src ="https://www.youtube.com/embed/feigIqugUsA?list=RDfeigIqugUsA"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>"
     
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
