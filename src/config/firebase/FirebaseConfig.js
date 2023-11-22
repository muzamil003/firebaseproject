// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdAUzcKkqsCgMQdhxGlAYiiS364dij1w0",
  authDomain: "muhfirebase003.firebaseapp.com",
  projectId: "muhfirebase003",
  storageBucket: "muhfirebase003.appspot.com",
  messagingSenderId: "284019063770",
  appId: "1:284019063770:web:de41c966a29abd88df1ee3",
  measurementId: "G-83JZQN2QDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

const database = getDatabase();

export { Auth , getDatabase };
