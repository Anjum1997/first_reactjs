
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../firebase/firebase.config";

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, { 
      vapidKey:'BAmy4SUZia7NnOHch154SuERi62DBzRllnFQG_WlAoZb6GsZB2oFY81XDI3iu3pnMAuyZwfY5GvFMnJ_oMvE3zM'});
    if (currentToken) {
      alert("allow Permissions to be granted");
      console.log('FCM Token:',currentToken);
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
