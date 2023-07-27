// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Or0C2rTHlC3ZrTC4-yVEwxip4TAAUvk",
  authDomain: "pinfusion.firebaseapp.com",
  projectId: "pinfusion",
  storageBucket: "pinfusion.appspot.com",
  messagingSenderId: "984556757545",
  appId: "1:984556757545:web:e0a519e1db90fa521cf238"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;