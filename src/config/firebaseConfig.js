// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSgdKudeV0tBDtqCGulX90ol9ZdJb2qIg",
  authDomain: "test-ca5c5.firebaseapp.com",
  projectId: "test-ca5c5",
  storageBucket: "test-ca5c5.firebasestorage.app",
  messagingSenderId: "42495213092",
  appId: "1:42495213092:web:5806f800547ebf2ffd22b1",
  measurementId: "G-3RTEYDNVY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  // se cambia por el getFirestore para manejar base de datos firestore