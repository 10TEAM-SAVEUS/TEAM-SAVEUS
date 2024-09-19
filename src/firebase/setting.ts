import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: `${process.env.FIRESTORE_API_KEY}`,
  authDomain: "saveus-9a83f.firebaseapp.com",
  databaseURL:
    "https://saveus-9a83f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "saveus-9a83f",
  storageBucket: "saveus-9a83f.appspot.com",
  messagingSenderId: "82340196598",
  appId: "1:82340196598:web:36bad8ea7041fa24277cd7",
  measurementId: "G-VHF6PXHFNN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
