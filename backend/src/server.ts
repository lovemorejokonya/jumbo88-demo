import express, { Request, Response } from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();
const port = 4242;
const STRIPE_SECRET_KEY = "sk_test_51RemvzBG0PkbaNmOBwo17Ig1B15iVTDnasWlBTXqLiDO11ZpTAIhy2lzcrZIjyZef9UCfp0VAHpCMmRjD4W4g0FX009MKIhH9t";
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

const YOUR_DOMAIN = 'http://localhost:5173';
// const YOUR_DOMAIN = 'https://86ef-2607-fea8-a51c-d700-e078-5aca-a263-37cc.ngrok-free.app';

app.get("/api/test", async (req: Request, res: Response) => {
  res.status(200).send({ message: "it works!" });
});


app.post('/create-checkout-session', async (req: Request, res: Response) => {
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
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
  
    res.send({clientSecret: session.client_secret});
    
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

app.get('/session-status', async (req: Request, res: Response) => {
  const session: any = await stripe.checkout.sessions.retrieve(req.query.session_id as string);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.post("/create-payment-intent", async (req: Request, res: Response) => {
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

