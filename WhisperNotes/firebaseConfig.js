// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKrHFiq3s_qepUOKh4EdR2ja-nKoKpzIg",
  authDomain: "whispernotes-871c0.firebaseapp.com",
  projectId: "whispernotes-871c0",
  storageBucket: "whispernotes-871c0.appspot.com",
  messagingSenderId: "7466834502",
  appId: "1:7466834502:web:c6916a8a562a6470c00847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);