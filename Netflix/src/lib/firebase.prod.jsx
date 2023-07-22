// Import the functions you need from the SDKs you need

import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { seedDatabase} from '../seed'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

seedDatabase(app)

export { app };