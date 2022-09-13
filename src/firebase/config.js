// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYlBcpoploNC2T-ds3K7ykPBvHPwrvDDI",
  authDomain: "fir-workshop-4ddb4.firebaseapp.com",
  projectId: "fir-workshop-4ddb4",
  storageBucket: "fir-workshop-4ddb4.appspot.com",
  messagingSenderId: "691261276696",
  appId: "1:691261276696:web:9e3a00439a005842f7396d",
  measurementId: "G-EFV2L28CWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
