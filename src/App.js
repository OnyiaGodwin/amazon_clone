import React, { useEffect } from "react";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import Checkout from "./components/Basket/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import classes from "./App.module.css";
import Login from "./components/Authentication/Login";
import Payment from "./components/Basket/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";
import Order from "./components/Basket/Orders";
import { onAuthStateChanged } from "firebase/auth";

// stripe publishable key: pk_test_51MB4HWFatb1jDXf59GpNLUOPih0JtJvTvlfyJrybDNr7BgZq7tqGWCf96K70nasOCdDLyhIxldotwyKwp9Ly0wju00VLq6AXQw

const promise = loadStripe(
  "pk_test_51MB4HWFatb1jDXf59GpNLUOPih0JtJvTvlfyJrybDNr7BgZq7tqGWCf96K70nasOCdDLyhIxldotwyKwp9Ly0wju00VLq6AXQw"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //NB: useEffect only run once the component(app) loads
    // and when there is change(s) in the dependency/dependencies
    
    // This is for firebase v8 sdk
    /*auth.onAuthStateChanged((authUser) => { 
      if (authUser) {
        // the user just logged in || the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      */

    // This is for firebase v9 sdk

      onAuthStateChanged(auth, authUser => {
      if (authUser) {
        // the user just logged in || the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [user, dispatch]);
  return (
    <div className={classes.app}>
      {/* Login */}
      <Routes>
        <Route path="/login" element={<Login />} exact />

        {/** Checkout */}
        <Route path="/checkout" 
        element={<><Header /><Checkout /></>}exact />

        {/* Payment */}
        <Route path="/payment"
          element={
            <><Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
          exact/>

                 {/** Order */}
        <Route path="/orders" 
        element={<><Header /><Order /></>}exact />

        {/** Home */}
        <Route path="/"
          element={
            <>
              <Header />
              <Home />
            </>
            }
          exact />
      </Routes>
    </div>
  );
}

export default App;
