// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9PT67P9XXFeQ31tW7LxNERwuRUT0VPPc",
  authDomain: "ppn-clone.firebaseapp.com",
  projectId: "ppn-clone",
  storageBucket: "ppn-clone.appspot.com",
  messagingSenderId: "839848174955",
  appId: "1:839848174955:web:f319c29f676f13ab02182e",
  measurementId: "G-PVPQJP7NQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();