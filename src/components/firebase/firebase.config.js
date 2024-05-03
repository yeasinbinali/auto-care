// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgMLckt-nYtgLmHh9kVsCwbeRsPQM6c-M",
  authDomain: "auto-care-site.firebaseapp.com",
  projectId: "auto-care-site",
  storageBucket: "auto-care-site.appspot.com",
  messagingSenderId: "471123682212",
  appId: "1:471123682212:web:35ffa5f9de8b3304635731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;