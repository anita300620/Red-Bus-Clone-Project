// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-wPxTCbI8GEnYSOfrNsLZr91flKE-V7k",
  authDomain: "redbus-clone-91ece.firebaseapp.com",
  projectId: "redbus-clone-91ece",
  storageBucket: "redbus-clone-91ece.appspot.com",
  messagingSenderId: "286960734126",
  appId: "1:286960734126:web:21bf5f7c15a133ec59423f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }