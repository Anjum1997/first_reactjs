import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import './AgoraCall.css';

const APP_ID= '959695bfdd1f4f6bb96494940d570802';
const CHANNEL = 'anjummishra';
const TOKEN  = '007eJxTYOBO78+vzapLeVUYVOCW73VC+97Ux+uvGa2WZX158POkt5cUGCxNLc0sTZPSUlIM00zSzJKSLM1MLIHQIMXU3MDCwOhblndaQyAjQ9SWg4yMDBAI4nMzJOZllebmZhZnFCUyMAAAmHcj0Q=='; 

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

function AgoraCall() {
  const [joined, setJoined] = useState(false);
  const [localTracks, setLocalTracks] = useState({ videoTrack: null, audioTrack: null });
  const [remoteUsers, setRemoteUsers] = useState([]);
  const videoRef = useRef();

  useEffect(() => {
    client.on('user-published', handleUserPublished);
    client.on('user-unpublished', handleUserUnpublished);

    return () => {
      client.off('user-published', handleUserPublished);
      client.off('user-unpublished', handleUserUnpublished);
    };
  }, []);

  const handleUserPublished = async (user, mediaType) => {
    await client.subscribe(user, mediaType);
    if (mediaType === 'video') {
      const remoteVideoTrack = user.videoTrack;
      const remotePlayerContainer = document.createElement('div');
      remotePlayerContainer.id = user.uid;
      remotePlayerContainer.style.width = '420px';
      remotePlayerContainer.style.height = '240px';
      document.body.append(remotePlayerContainer);
      remoteVideoTrack.play(remotePlayerContainer);
    }

    if (mediaType === 'audio') {
      user.audioTrack.play();
    }

    setRemoteUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleUserUnpublished = (user) => {
    const remotePlayerContainer = document.getElementById(user.uid);
    if (remotePlayerContainer) {
      remotePlayerContainer.remove();
    }
    setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
  };

  const joinChannel = async () => {
    await client.join(APP_ID, CHANNEL, TOKEN, null);
    const videoTrack = await AgoraRTC.createCameraVideoTrack();
    const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    setLocalTracks({ videoTrack, audioTrack });

    await client.publish([videoTrack, audioTrack]);
    videoTrack.play(videoRef.current);
    setJoined(true);
  };

  const leaveChannel = async () => {
    localTracks.videoTrack.close();
    localTracks.audioTrack.close();
    client.remoteUsers.forEach((user) => {
      if (user.hasVideo) {
        const playerContainer = document.getElementById(user.uid);
        if (playerContainer) {
          playerContainer.remove();
        }
      }
    });
    await client.leave();
    setLocalTracks({ videoTrack: null, audioTrack: null });
    setJoined(false);
    setRemoteUsers([]);
  };

  const toggleCamera = async () => {
    if (localTracks.videoTrack.isPlaying) {
      await localTracks.videoTrack.stop();
      await localTracks.videoTrack.setEnabled(false);
    } else {
      await localTracks.videoTrack.setEnabled(true);
      await localTracks.videoTrack.play(videoRef.current);
    }
  };

  const toggleMicrophone = async () => {
    if (localTracks.audioTrack.isEnabled) {
      await localTracks.audioTrack.setEnabled(false);
    } else {
      await localTracks.audioTrack.setEnabled(true);
    }
  };

  return (
    <div className="Agora">
      <h1>Agora Video Call</h1>
      <div className="Agora-container" ref={videoRef}></div>
      <div className="controls">
        <button onClick={joined ? leaveChannel : joinChannel}>
          {joined ? 'Leave Channel' : 'Join Channel'}
        </button>
        <button onClick={toggleCamera} disabled={!joined}>
          Toggle Camera
        </button>
        <button onClick={toggleMicrophone} disabled={!joined}>
          Toggle Microphone
        </button>
      </div>
    </div>
  );
}

export default AgoraCall;
