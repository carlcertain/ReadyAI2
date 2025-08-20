// ======================= FIREBASE SET UP ======================== //

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdMkmqeeIApiF-WEUFRl-arU-5Qhufgf8",
  authDomain: "readyaidev.firebaseapp.com",
  projectId: "readyaidev",
  storageBucket: "readyaidev.firebasestorage.app",
  messagingSenderId: "108710483517",
  appId: "1:108710483517:web:126d216970486f68dc3c54",
  measurementId: "G-ZPMN8Z59YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);