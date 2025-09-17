// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC1TS6glw7-3k2qx-ZGgx2Clyii8f9bDSk",
  authDomain: "ecommercesolara.firebaseapp.com",
  projectId: "ecommercesolara",
  storageBucket: "ecommercesolara.firebasestorage.app",
  messagingSenderId: "149066291902",
  appId: "1:149066291902:web:ae08c041b1079067891cef",
  measurementId: "G-BG5PRR19NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);