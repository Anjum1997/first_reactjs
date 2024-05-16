import React, { createContext, useContext, useState, useEffect } from 'react';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
    onAuthStateChanged, 
    signOut,
     GoogleAuthProvider,
      signInWithPopup,
       sendPasswordResetEmail, 
       confirmPasswordReset
       } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase/firebase.config';
import { signupSuccess, 
  signupFailure,
   loginSuccess,
    loginFailure,
     logoutSuccess,
      logoutFailure,
       resetPasswordSuccess,
        resetPasswordFailure, 
        sendPasswordResetEmailSuccess,
         sendPasswordResetEmailFailure
         } from '../../redux-toolkit/slices/authSlice'; 
import { useDispatch} from 'react-redux';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
 
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signupWithEmailPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      await saveUserDataToFirestore(userCredential.user);
     dispatch(signupSuccess(userCredential.user)) ; 
    } catch (error) {
      console.error('Error signing up with email and password:', error);
      setError(error.message);
     dispatch( signupFailure(error.message));
    }
  };

  const signinWithEmailPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      await saveUserDataToFirestore(userCredential.user);
     dispatch( loginSuccess(userCredential.user)); 
    } catch (error) {
      console.error('Error signing in with email and password:', error);
      setError(error.message);
     dispatch (loginFailure(error.message)); 
    }
  };

  const signinWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      await saveUserDataToFirestore(userCredential.user);
     dispatch( loginSuccess(userCredential.user));
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError(error.message);
     dispatch( loginFailure(error.message)); 
   
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('user');
     dispatch (logoutSuccess()); 
    } catch (error) {
      console.error('Error signing out:', error);
      setError(error.message);
     dispatch (logoutFailure(error.message)); 
    
    }
  };

  const saveUserDataToFirestore = async (user,userData) => {
    try {
      const usersCollection = collection(firestore, 'users');
      await addDoc(usersCollection, { ...userData, uid: user.uid });
      console.log('User data saved to Firestore successfully.');
    } catch (error) {
      console.error('Error saving user data to Firestore:', error);
      setError(error.message);
   
    }
  };

  const sendPasswordResetEmailFunc = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent successfully');
      dispatch(sendPasswordResetEmailSuccess()); 
    } catch (error) {
      console.error('Error sending password reset email:', error);
      setError(error.message);
     dispatch( sendPasswordResetEmailFailure(error.message)); 
   
    }
  };

  const resetPasswordWithToken = async (token, newPassword) => {
    try {
      await confirmPasswordReset(auth, token, newPassword);
      console.log('Password reset successfully');
     dispatch (resetPasswordSuccess()); 
    } catch (error) {
      console.error('Error resetting password:', error);
      setError(error.message);
     dispatch( resetPasswordFailure(error.message)); 
   
    }
  };

  return (
    <AuthContext.Provider value={{ user, error,signupWithEmailPassword, signinWithEmailPassword, signinWithGoogle, signout, sendPasswordResetEmail: sendPasswordResetEmailFunc, resetPasswordWithToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
