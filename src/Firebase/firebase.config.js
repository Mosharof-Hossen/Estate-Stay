// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4-5bqetJiqMV1LQwy_RkZXr23RqY3IbY",
    authDomain: "estate-stay.firebaseapp.com",
    projectId: "estate-stay",
    storageBucket: "estate-stay.appspot.com",
    messagingSenderId: "682563297059",
    appId: "1:682563297059:web:7ca4f116754e8cc63c3696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;