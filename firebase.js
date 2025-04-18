// firebase.js
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhAXbtLOmC-fW7u_3Yhux_1yy-OZTJ3Eo",
  authDomain: "gamify-cs320.firebaseapp.com",
  projectId: "gamify-cs320",
  storageBucket: "gamify-cs320.firebasestorage.app",
  messagingSenderId: "641481633457",
  appId: "1:641481633457:web:48a91983215ec882a5fc90",
  measurementId: "G-RT0P353P49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);       
const auth = getAuth(app);          

export { db, auth };
