import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { loadStripe, type Stripe } from '@stripe/stripe-js'
import { Elements, EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js'
import "./App.css";

import Jumbo88 from "./pages/Jumbo88";
import Layout from "./components/Layout";
import { useCallback, useEffect, useState } from "react";

const STRIPE_PUBLISHABLE_KEY = "pk_test_51RemvzBG0PkbaNmOFioES7URLdPkVRv5AdI0lqJIdH65JF9Xsz4R1ybPYpGj0BeStJLP3QUho9cqOMJo9TyDAW9M007tunX9EJ";
const stripePromise: Promise<Stripe | null> = loadStripe(STRIPE_PUBLISHABLE_KEY);

function App() {

  // const promise: Promise<string> = useMemo(() => {
  //   return fetch('/create-checkout-session', {
  //     method: 'POST',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => data.clientSecret);
  // }, []);

  // const appearance: any = {
  //   theme: 'stripe',
  // };
  
  return (
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Jumbo88 />} />
          <Route path="/checkout/:priceId" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </Elements>
  );
}

export default App;

// interface CheckoutFormProps {
//   priceId: string;
// }

const CheckoutForm = () => {
  const {priceId} = useParams();
  console.log({priceId});
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({priceId}),
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, [priceId]);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');
    console.log({sessionId});
    fetch(`/?session_id=${sessionId}`)
      .then(async (res) => {
        console.log({res});
        return await res.json()
      })
      .then((data) => {
        console.log({data});
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      })
      .catch((error) => {
        console.log({error});
      });
  }, []);

  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.

          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    )
  }

  return null;
}