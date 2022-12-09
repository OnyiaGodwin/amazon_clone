import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import classes from "./Login.module.css";

function Login() {
  const navigate =  useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (event) => {
       setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
     }

     const signInHandler = (event) => {
        event.preventDefault();

       // Some firebase login 
       signInWithEmailAndPassword(auth, email, password).then((auth) => {
         //console.log(auth);
         if (auth) {
          navigate('/');
        }
        }).catch(error => alert(error.message));

     }

     const registrationHandler = (event) => {
        event.preventDefault();

        // some firebase registration
        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
          //console.log(auth)
          if (auth) {
            // if successfully created a new user with email and password
            // redirect the new user to the home page
            navigate('/')
          }
        }).catch(error => alert(error.message));
     }

  return (
    <div className={classes.login}>
      <Link to="/">
        <img
          className={classes.login__logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt="login logo"
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={emailHandler}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={passwordHandler} />

          <button className={classes.login__signInButton} type='submit' onClick={signInHandler} >Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className={classes.login__registerButton} type='submit' onClick={registrationHandler} >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
