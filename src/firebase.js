import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDqBqgz143bvY9riLwQPzMqxFug24QO9rc",
    authDomain: "clone-app-6e49e.firebaseapp.com",
    projectId: "clone-app-6e49e",
    storageBucket: "clone-app-6e49e.appspot.com",
    messagingSenderId: "1033115631445",
    appId: "1:1033115631445:web:551fa15ac09ed4007c39dc",
    measurementId: "G-85WN4S3CWL"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
//const provider = new GoogleAuthProvider()

export { db, auth, storage };