
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
const firebaseConfig  = {
  apiKey: "AIzaSyBNjGDjWBGImu808p2-Ifs4Fxbj_pUMfzk",
  authDomain: "react-project-698ed.firebaseapp.com",
  projectId: "react-project-698ed",
  storageBucket: "react-project-698ed.appspot.com",
  messagingSenderId: "335509057196",
  appId: "1:335509057196:web:5cf6048f6797e6ede5b909",
  measurementId: "G-7Z24KDHLP6"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
