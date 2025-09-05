import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGDbNpNpqtZfy8dlSUcbH7OClqU2tvS1Y",
    authDomain: "rent-9918b.firebaseapp.com",
    projectId: "rent-9918b",
    storageBucket: "rent-9918b.appspot.com", // <-- fixed here
    messagingSenderId: "219570458000",
    appId: "1:219570458000:web:912b27f05523d69e4d7715",
    measurementId: "G-7YPE5B5LPF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
