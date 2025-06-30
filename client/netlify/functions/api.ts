// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Request, Response, Router } from "express";
import serverless from "serverless-http";
import Stripe from "stripe";
import 'dotenv/config'
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const api = express();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});
const CLIENT_URL = process.env.CLIENT_URL!;
const router = Router();
router.get("/hello", (req: Request, res: Response) => res.json({ message: "Hello World!" }));

router.get("/api/test", async (req: Request, res: Response) => {
  res.status(200).send({ message: "it works!" });
});


router.post('/create-checkout-session', async (req: Request, res: Response) => {
  try {
    const priceId = req.body.priceId;
    console.log({ priceId});
    const session: any = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `${CLIENT_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
  
    res.send({clientSecret: session.client_secret});
    
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

router.get('/session-status', async (req: Request, res: Response) => {
  const session: any = await stripe.checkout.sessions.retrieve(req.query.session_id as string);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

router.post("/create-payment-intent", async (req: Request, res: Response) => {
  const { amount } = req.body;
  console.log("Amount:", amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      payment_method_types: ['card', 'apple_pay'],
      currency: "usd",
      automatic_payment_methods: { enabled: false },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    res.status(400).send({ error: { message: error.message } });
  }
});

api.use("/api/", router);

export const handler = serverless(api);