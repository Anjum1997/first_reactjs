
import { initializeApp } from 'firebase/app';
import { getMessaging} from "firebase/messaging";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf_cXKLaZ5pUe_XUsYnpuAC5BFDpruRlI",
  authDomain: "anjum-project.firebaseapp.com",
  projectId: "anjum-project",
  storageBucket: "anjum-project.appspot.com",
  messagingSenderId: "433519259186",
  appId: "1:433519259186:web:4d1eb5a766f6d26b0d162b",
  measurementId: "G-BEXCZ647E9"
  };

  const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const auth =getAuth(app);
const firestore = getFirestore(app);
export { auth, messaging, firestore };
export default app;
  