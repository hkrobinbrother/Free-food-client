// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl28_7rC0qpJXW8hMua_axTKe2eIZJDB0",
  authDomain: "assigment-11-1435c.firebaseapp.com",
  projectId: "assigment-11-1435c",
  storageBucket: "assigment-11-1435c.firebasestorage.app",
  messagingSenderId: "710680656703",
  appId: "1:710680656703:web:6a28d53eb04948f6ddb18a",
  measurementId: "G-9SMNL4P1NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
export const analytics = getAnalytics(app);