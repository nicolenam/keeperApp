// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSgrDv02IyGZPtQ3dhW19UEPG_JAeL3m0",
  authDomain: "keeper-app-4cf91.firebaseapp.com",
  databaseURL: "https://keeper-app-4cf91-default-rtdb.firebaseio.com",
  projectId: "keeper-app-4cf91",
  storageBucket: "keeper-app-4cf91.appspot.com",
  messagingSenderId: "100644192096",
  appId: "1:100644192096:web:46cbab49ef4b7f1dfc6805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;