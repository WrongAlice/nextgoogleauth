// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_APP_ID

    apiKey: "AIzaSyAo8obr2QvZTHbOQeC_hRF1_7MFoFJBYzQ",
    authDomain: "nextauth-e2683.firebaseapp.com",
    projectId: "nextauth-e2683",
    storageBucket: "nextauth-e2683.appspot.com",
    messagingSenderId: "311914978410",
    appId: "1:311914978410:web:3a98939f9d0d0e41b7be13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();