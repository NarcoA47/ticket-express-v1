// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, getFirestore, updateDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
  limit,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf1M0Ivwoy3lzbG8AfPnwhr6zUk2WxXFI",
  authDomain: "avante-express.firebaseapp.com",
  databaseURL:
    "https://avante-express-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "avante-express",
  storageBucket: "avante-express.appspot.com",
  messagingSenderId: "914041386388",
  appId: "1:914041386388:web:99b799a7307779cc4e0b81",
  measurementId: "G-P42R9L9TXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage };
export {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  orderBy,
  query,
  where,
  limit,
};
export { getDownloadURL, getStorage, ref, uploadString };
