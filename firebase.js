// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBikSgLMPq1AlONXGQ33neslJFAzbRkeEA",
  authDomain: "aloplan.firebaseapp.com",
  projectId: "aloplan",
  storageBucket: "aloplan.appspot.com",
  messagingSenderId: "553936711434",
  appId: "1:553936711434:web:2d530b9f61a4c2021794f3",
  measurementId: "G-C61LSF3HE0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);