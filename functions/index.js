const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MB4HWFatb1jDXf5MYDt5x5iASV0RDyZfrUIEsdtyb0h7TiRARewPXD0qr15svP1wmdfPH1UpwChuTJcfWDjdgVi00Twe2BCsB"
);


// API

// - App config
const app =  express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;  //this is the amount in subunit

    console.log("Payment request received for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-app-6e49e/us-central1/api
//http://127.0.0.1:5001/clone-app-6e49e/us-central1/api
