// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv2OPNZTgtywMJG68uVefJdkjCiO7MoeQ",
  authDomain: "travel-guru-eb5ab.firebaseapp.com",
  projectId: "travel-guru-eb5ab",
  storageBucket: "travel-guru-eb5ab.firebasestorage.app",
  messagingSenderId: "354311492433",
  appId: "1:354311492433:web:6e2b95ea1287716215f970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
