// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOTXgiQjv0jWBOY8bJdmPovAlIlFCr35A",
  authDomain: "chat-22360.firebaseapp.com",
  projectId: "chat-22360",
  storageBucket: "chat-22360.appspot.com",
  messagingSenderId: "438338327829",
  appId: "1:438338327829:web:5f7c41426084cc44f2451c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();