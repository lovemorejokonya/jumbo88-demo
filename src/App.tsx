import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadStripe, type Stripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import "./App.css";

import Jumbo88 from "./pages/Jumbo88";
import Layout from "./components/Layout";

const STRIPE_PUBLISHABLE_KEY = "pk_test_51RemvzBG0PkbaNmOFioES7URLdPkVRv5AdI0lqJIdH65JF9Xsz4R1ybPYpGj0BeStJLP3QUho9cqOMJo9TyDAW9M007tunX9EJ";
const stripePromise: Promise<Stripe | null> = loadStripe(STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Jumbo88 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </Elements>
  );
}

export default App;
