// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDFnhuFFvF1csC8XwWwtcf6JHmWUobkeEs",
  authDomain: "webbshop-divingdelights.firebaseapp.com",
  projectId: "webbshop-divingdelights",
  storageBucket: "webbshop-divingdelights.appspot.com",
  messagingSenderId: "903826650348",
  appId: "1:903826650348:web:685fcc3e42e2bd082ae1c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{ db }
