// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlBqKVBfjWwqBr496cs-pHrLbtc8qRuNo",
  authDomain: "user-admin-8ce4f.firebaseapp.com",
  projectId: "user-admin-8ce4f",
  storageBucket: "user-admin-8ce4f.appspot.com",
  messagingSenderId: "993069748754",
  appId: "1:993069748754:web:51a3f08ea25a4ef3063ecb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
