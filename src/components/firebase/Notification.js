// Notification.js
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { requestForToken, onMessageListener } from './FirebaseMessaging';

const Notification = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });

  const notify = () => toast(<ToastDisplay />);

  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
      </div>
    );
  };

  useEffect(() => {
    requestForToken();

    onMessageListener()
      .then((payload) => {
        setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
        notify();
      })
      .catch((err) => console.log('Failed: ', err));

  }, []);

  return (
    <Toaster />
  );
};

export default Notification;
