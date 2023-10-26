import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'firebase/auth';

const config = {
  apiKey: "AIzaSyDEpLst3tiorsfPk2ZXiw-eGmSVlulxe1Y",
  authDomain: "idefiai.firebaseapp.com",
  projectId: "idefiai",
  storageBucket: "idefiai.appspot.com",
  messagingSenderId: "256088643029",
  appId: "1:256088643029:web:85dfdd43c402dda5e3195c"
};

const app = initializeApp(config);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
}

const signInWithEmailPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

const createAccountWithEmailPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export { app, auth, signInWithGoogle, signInWithEmailPassword, createAccountWithEmailPassword };
