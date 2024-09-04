// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCU9j4cG9cR81Qw1VNNU-5iDO_P8wJS0Y",
  authDomain: "ai-flashcards-take-4.firebaseapp.com",
  projectId: "ai-flashcards-take-4",
  storageBucket: "ai-flashcards-take-4.appspot.com",
  messagingSenderId: "741006002507",
  appId: "1:741006002507:web:f8423658414d94023100ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
