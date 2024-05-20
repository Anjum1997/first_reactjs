import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css'; // Create this CSS file separately

const AudioPlayer = ({ audioSrc, audioName, thumbnailSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };
    
    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (event) => {
    const audio = audioRef.current;
    audio.volume = event.target.value;
    setVolume(event.target.value);
  };

  return (
    <div className="audio-player">
      <img src={thumbnailSrc} alt="Thumbnail" className="thumbnail" />
      <div className="details">
        <h3>{audioName}</h3>
        <audio ref={audioRef} src={audioSrc}></audio>
        <div className="control">
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={handleMute}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;


 
//npm init
//script 
//start:'node file.js'
//npm start
//npm install nodemon