import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { useStateValue } from "../../store/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "../../store/reducer";
import classes from "./Payment.module.css";
import axios from "../../axios";
import { db } from "../../firebase";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import CurrencyFormat from "react-currency-format";

import { doc, setDoc } from "firebase/firestore";


export default function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeded, setSucceded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // Generate special stripe secret that allows the customer to be charged

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The secret is >>>", clientSecret);
  console.log("The user is >>>", user);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Some stripe fancy stuff...
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // PaymentIntent == payment

        // To push into firebase Cloud Firestore: //This is for firebase v8 web sdk
         /* db
          .collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        }); */

        /* To push into firebase Cloud Firestore: This is for firebase v9 web sdk */
      
        const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);

        setDoc(ref, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

        setSucceded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders", { replace: true });
      });
  };

  // navigate("/some/where", { replace: true })

  const changeHandler = (event) => {
    // Listens for changes in the CardElement
    // Also displays any errors as the customer inputs card details
    setDisabled(event.empty);
    setProcessing(event.error ? event.error.message : "");
  };

  return (
    <div className={classes.payment}>
      <div className={classes.payment__container}>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section --> Delivery address */}
        <div className={classes.payment__section}>
          <div className={classes.payment__title}>
            <h3>Delivery Address</h3>
          </div>
          <div className={classes.payment__address}>
            <p>{user?.email}</p>
            <p>247 Kent Way</p>
            <p>Idumota, Lagos</p>
          </div>
        </div>

        {/* payment section --> Review Items */}
        <div className={classes.payment__section}>
          <div className={classes.payment__title}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={classes.payment__items}>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section --> Payment method */}
        <div className={classes.payment__section}>
          <div className={classes.payment__title}>
            <h3>Payment Method</h3>
          </div>
          <div className={classes.payment__details}>
            {/* stripe */}
            <form onSubmit={submitHandler}>
              <CardElement onChange={changeHandler} />

              <div className={classes.payment__priceContainer}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* When there is an error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
