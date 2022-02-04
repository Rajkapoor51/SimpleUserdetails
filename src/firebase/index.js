import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhw0bJBvOuDJlitCEXgnIcqbUWSViQHrM",
    authDomain: "userfirebase-d2457.firebaseapp.com",
    projectId: "userfirebase-d2457",
    storageBucket: "userfirebase-d2457.appspot.com",
    messagingSenderId: "642639104762",
    appId: "1:642639104762:web:68e2c0048423f9ce951743",
    measurementId: "G-CMXP798Y75"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);