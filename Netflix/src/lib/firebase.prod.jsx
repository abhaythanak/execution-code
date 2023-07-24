// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase} from '../seed'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
  seedDatabase(db)
export {app};