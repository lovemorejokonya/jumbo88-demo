// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

const express = require('express')
const serverless = require('serverless-http')
require('dotenv/config')
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
// const stripe = new Stripe(STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-05-28.basil",
// });
// const CLIENT_URL = process.env.CLIENT_URL;
const router = express.Router();
router.get("/hello", (req, res) => res.json({ message: "Hello World!" }));

// router.get("/api/test", async (req, res) => {
//   res.status(200).send({ message: "it works!" });
// });


// router.post('/create-checkout-session', async (req, res) => {
//   try {
//     const priceId = req.body.priceId;
//     console.log({ priceId});
//     const session = await stripe.checkout.sessions.create({
//       ui_mode: 'embedded',
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, price_1234) of the product you want to sell
//           price: priceId,
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       return_url: `${CLIENT_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
//     });
  
//     res.send({clientSecret: session.client_secret});
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: error.message });
//   }
// });

// router.get('/session-status', async (req, res) => {
//   const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

//   res.send({
//     status: session.status,
//     customer_email: session.customer_details.email
//   });
// });

// router.post("/create-payment-intent", async (req, res) => {
//   const { amount } = req.body;
//   console.log("Amount:", amount);
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       payment_method_types: ['card', 'apple_pay'],
//       currency: "usd",
//       automatic_payment_methods: { enabled: false },
//     });

//     res.send({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     res.status(400).send({ error: { message: error.message } });
//   }
// });

// app.use("/api/", router);

module.exports.handler = serverless(app);