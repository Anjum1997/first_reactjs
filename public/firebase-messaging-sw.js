
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDf_cXKLaZ5pUe_XUsYnpuAC5BFDpruRlI",
  authDomain: "anjum-project.firebaseapp.com",
  projectId: "anjum-project",
  storageBucket: "anjum-project.appspot.com",
  messagingSenderId: "433519259186",
  appId: "1:433519259186:web:4d1eb5a766f6d26b0d162b",
  measurementId: "G-BEXCZ647E9"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
   
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});