// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOxsTrh8QuELY8ZKY7veNThaJkUolAP2Q",
  authDomain: "nobbie-auth.firebaseapp.com",
  projectId: "nobbie-auth",
  storageBucket: "nobbie-auth.appspot.com",
  messagingSenderId: "264021998152",
  appId: "1:264021998152:web:e658f4916b59bbe697b67d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
