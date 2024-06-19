// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZKBcc81PiLr46OGZPfX4uqOtONeaooSo",
  authDomain: "sgboda-7f9f5.firebaseapp.com",
  projectId: "sgboda-7f9f5",
  storageBucket: "sgboda-7f9f5.appspot.com",
  messagingSenderId: "794861124627",
  appId: "1:794861124627:web:3febf60fd1a22bf6dc13e6",
  measurementId: "G-V92EQ1CFP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);