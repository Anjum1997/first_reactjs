


import { initializeApp } from 'firebase/app';
import { getMessaging} from "firebase/messaging";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";




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
const auth =getAuth(app);
const firestore = getFirestore(app);
export { auth, messaging, firestore };
export default app;
  