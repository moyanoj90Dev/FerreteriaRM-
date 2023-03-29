import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getFirestore } from "www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBEDnBh0X_LkJL7HqS_e6V7PJCIe4mYyIc",
    authDomain: "ferreteria-rm.firebaseapp.com",
    databaseURL: "https://ferreteria-rm-default-rtdb.firebaseio.com",
    projectId: "ferreteria-rm",
    storageBucket: "ferreteria-rm.appspot.com",
    messagingSenderId: "1083474090476",
    appId: "1:1083474090476:web:aa2f4081593b094f3e88c9",
    measurementId: "G-K6FM7VC1SR"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
