const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
//const { request, response } = require('express');
const stripe = require("stripe")("sk_test_51HPvaRKr1KfjZzvTmp7WJhQBzQMwNPphBuNWPEcLOShz6uKb9cpYMo0OMxsgHeJO1yRmcQTrBprRytI1nikisIsT00RCb8qxoS");

//API


// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  console.log("HI from index");
});

// Listen Command
exports.api = functions.https.onRequest(app);