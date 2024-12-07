// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfi-ewal4_b2H-o58Avsx1jB4LIzvqG64",
  authDomain: "registration-form-a8ac3.firebaseapp.com",
  projectId: "registration-form-a8ac3",
  storageBucket: "registration-form-a8ac3.firebasestorage.app",
  messagingSenderId: "240371625689",
  appId: "1:240371625689:web:5eb36ce94113702f9918c8",
  measurementId: "G-MTW8VE4JEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db=getFirestore(app);
export default app;