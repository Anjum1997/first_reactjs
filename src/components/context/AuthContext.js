import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase/firebase.config'; 

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signinWithEmailPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);

      await saveUserDataToFirestore(email);
    } catch (error) {
      console.error('Error signing in with email and password:', error);
      setError(error.message);
      throw error;
    }
  };

  const signupWithEmailPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);

      await saveUserDataToFirestore(email);
    } catch (error) {
      console.error('Error signing up with email and password:', error);
      setError(error.message);
      throw error;
    }
  };

  const signinWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);

      
      await saveUserDataToFirestore(userCredential.user.email);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError(error.message);
      throw error;
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
      setError(error.message);
      throw error;
    }
  };

  const saveUserDataToFirestore = async (email) => {
    try {
      const usersCollection = collection(firestore, 'users');
      await addDoc(usersCollection, { email });
    } catch (error) {
      console.error('Error saving user data to Firestore:', error);
      setError(error.message);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, error, signinWithEmailPassword, signupWithEmailPassword, signinWithGoogle, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
