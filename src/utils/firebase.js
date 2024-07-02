// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQk157vmrKrtcrbmzj65wR-x74nNWmhik",
    authDomain: "videohub-gpt.firebaseapp.com",
    projectId: "videohub-gpt",
    storageBucket: "videohub-gpt.appspot.com",
    messagingSenderId: "243370506102",
    appId: "1:243370506102:web:1f2bcd250eac0c13902c57",
    measurementId: "G-52VPBER5Q6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
