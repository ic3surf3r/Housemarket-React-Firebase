import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7xKLWBulOUsQkLBrwcGEVDr3NmXzFKRc",
  authDomain: "house-marketplace-app-7e196.firebaseapp.com",
  projectId: "house-marketplace-app-7e196",
  storageBucket: "house-marketplace-app-7e196.appspot.com",
  messagingSenderId: "176189477661",
  appId: "1:176189477661:web:bee4f390f0b6b1a33b47f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
