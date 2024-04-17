
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../firebase/firebase.config";

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, { 
      vapidKey: 'BItbCr47AbH9evUtfRJ11d9EbYSKmnjwRTuGgqH-lbF9_QXXuWQzVSN4sd6QuF-MfbTiOElJ_qErwzR961nPeoY' 
    });
    if (currentToken) {
      alert("allow Permissionsto be granted");
    } else {
      alert('No registration token available. Request permission to generate one.');
    }
  } catch (err) {
    alert('An error occurred while retrieving token: ' + err.message);
  }
};

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Payload", payload);
      resolve(payload);
    });
  });
};
