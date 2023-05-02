// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOMKkyfhEHqR5wpGr0I0ATrPloyjSR13I",
  authDomain: "smt-code-line-23.firebaseapp.com",
  projectId: "smt-code-line-23",
  storageBucket: "smt-code-line-23.appspot.com",
  messagingSenderId: "65801469183",
  appId: "1:65801469183:web:f1c58122f7dd583c8ba0ca",
  measurementId: "G-PW3QY5Q304",
  databaseURL:
    "https://smt-code-line-23-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const rt = getDatabase(app);
export default app;
