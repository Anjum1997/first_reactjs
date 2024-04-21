
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { requestForToken, onMessageListener } from './FirebaseMessaging';

const Notification = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    requestForToken();
    onMessageListener()
      .then((payload) => {
       
        setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
        toast.success(payload?.notification?.body); 
      })
      .catch((err) => console.error('Failed:', err));
  }, []);

  return <Toaster />;
};

export default Notification;
