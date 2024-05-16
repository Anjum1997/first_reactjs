import React, { useState } from 'react';
import GoogleLoginButton from 'react-google-button';
import './Googlesignin.css';

function Googlesignin() {
  const [userData, setUserData] = useState(null);

  const responseGoogleSuccess = (response) => {
    console.log('Login Success:', response);
    setUserData({
      name: response.profileObj.name,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl
    });
  };

  const responseGoogleFailure = (error) => {
    console.error('Login Error:', error);
   
  };

  return (
    <div className="Gmail-login">
      <h1>Gmail Login</h1>
      <GoogleLoginButton
        clientId="433519259186-hgtbu175989q5ja6lem2jh2fo440ejcf.apps.googleusercontent.com" 
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        label="Login with Google"
      />
      {userData && (
        <div className="user-data">
          <h2>User Data</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <img src={userData.imageUrl} alt="User" className="user-avatar" />
        </div>
      )}
    </div>
  );
}

export default Googlesignin;
