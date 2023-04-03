import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBBUWmDUELifYA43db4w3BqA4vGsSYg2X8",
  authDomain: "rm-ferreteria-5b763.firebaseapp.com",
  databaseURL: "https://rm-ferreteria-5b763-default-rtdb.firebaseio.com",
  projectId: "rm-ferreteria-5b763",
  storageBucket: "rm-ferreteria-5b763.appspot.com",
  messagingSenderId: "745134559454",
  appId: "1:745134559454:web:8be4b05f23d0a41e66f24f",
  measurementId: "G-FTZVLBWZ3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
