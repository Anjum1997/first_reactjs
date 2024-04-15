import React from 'react';
import firebase from './Firebase.js';

const Notification = () => {
    const messaging = firebase.messaging();
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        messaging.getToken().then((token) => {
          console.log('FCM Token:', token);
        }).catch((err) => {
          console.error('Unable to get FCM token.', err);
        });
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  

  return (
    <div>
      this is good
    </div>
  )
}

export default Notification;
