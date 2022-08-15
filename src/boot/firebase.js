// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZtiuCnjLZ83VOBy8d-1cguLjcmuHSoV8",
  authDomain: "teepsee-14d60.firebaseapp.com",
  projectId: "teepsee-14d60",
  storageBucket: "teepsee-14d60.appspot.com",
  messagingSenderId: "17125383124",
  appId: "1:17125383124:web:b11f531b909999dc4b1441",
  measurementId: "G-3QTS4QJL71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const Storage = getStorage(app);
export { db, auth, Storage }
