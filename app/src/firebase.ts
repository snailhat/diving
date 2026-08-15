import { initializeUI } from "@firebase-oss/ui-core";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjyWLLa4TA8XSI7FgagvZwBAIIKBsYq94",
  authDomain: "divingshizz.firebaseapp.com",
  projectId: "divingshizz",
  storageBucket: "divingshizz.firebasestorage.app",
  messagingSenderId: "947317020116",
  appId: "1:947317020116:web:e33d02837d25330cea7241",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const ui = initializeUI({ app });
