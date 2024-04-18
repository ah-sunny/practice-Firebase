// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB58FwA2rRCxBh8ux4DDOcED4V4ur_AaBM",
  authDomain: "simple-firebase-7d336.firebaseapp.com",
  projectId: "simple-firebase-7d336",
  storageBucket: "simple-firebase-7d336.appspot.com",
  messagingSenderId: "136789226620",
  appId: "1:136789226620:web:34c70b081353476e1105f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// export default app;
export default auth;