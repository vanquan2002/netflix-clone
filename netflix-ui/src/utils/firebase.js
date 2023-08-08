// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAaLN_sfJewPUqbrk2OCfnAXTzS8eIHKLk",
    authDomain: "react-netflix-clone-19d9e.firebaseapp.com",
    projectId: "react-netflix-clone-19d9e",
    storageBucket: "react-netflix-clone-19d9e.appspot.com",
    messagingSenderId: "814042377201",
    appId: "1:814042377201:web:23675c42da4c45c9be7250",
    measurementId: "G-PL15T40T89"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)