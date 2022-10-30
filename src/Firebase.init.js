import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj-i921LTVAUz_l0UEd1_lrouGrlm4fYU",
    authDomain: "gym-train-work-out.firebaseapp.com",
    projectId: "gym-train-work-out",
    storageBucket: "gym-train-work-out.appspot.com",
    messagingSenderId: "867033726507",
    appId: "1:867033726507:web:f75552c21ec90ce58d746e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 