


import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import {getAuth} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBNjGDjWBGImu808p2-Ifs4Fxbj_pUMfzk",
  authDomain: "react-project-698ed.firebaseapp.com",
  projectId: "react-project-698ed",
  storageBucket: "react-project-698ed.appspot.com",
  messagingSenderId: "335509057196",
  appId: "1:335509057196:web:5cf6048f6797e6ede5b909",
  measurementId: "G-7Z24KDHLP6"
  };
  const app = initializeApp(firebaseConfig);
  


const messaging = getMessaging(app);


export const requestForToken = async () => {
    try {
    const currentToken = await getToken(messaging, { vapidKey: 'BItbCr47AbH9evUtfRJ11d9EbYSKmnjwRTuGgqH-lbF9_QXXuWQzVSN4sd6QuF-MfbTiOElJ_qErwzR961nPeoY' });
    if (currentToken) {
      alert('current token for client: ', currentToken);
    } else {
     
      alert('No registration token available. Request permission to generate one.');
    }
  } catch (err) {
    alert('An error occurred while retrieving token. ', err);
  }
  };

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });
  export const auth = getAuth(app);
  export default app;