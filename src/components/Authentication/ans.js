import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // ie from firebase.js file you created


const register = (e) => {
    e.preventDefault();

    // for registration
    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      console.log(auth)
      if (auth) {
        // if successfully created a new user with email and password
        // redirect the new user to the home page
        navigate('/')
      }
    }).catch(error => alert(error.message));
 }

 

const signIn= (e) => {
    e.preventDefault();

   // for login 
   signInWithEmailAndPassword(auth, email, password).then((auth) => {
    console.log(auth);
     if (auth) {
         // if successfully signed in, redirect the new user to the home page
      navigate('/');
    }
    }).catch(error => alert(error.message));

 };