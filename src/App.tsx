import './App.css'
import Jumbo88 from './pages/Jumbo88'
import { loadStripe, type Stripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const STRIPE_PUBLISHABLE_KEY = "pk_test_51RemvzBG0PkbaNmOFioES7URLdPkVRv5AdI0lqJIdH65JF9Xsz4R1ybPYpGj0BeStJLP3QUho9cqOMJo9TyDAW9M007tunX9EJ";
const stripePromise: Promise<Stripe | null> = loadStripe(STRIPE_PUBLISHABLE_KEY);

function App() {

  return (
    <Elements stripe={stripePromise}>
      <Jumbo88 />
    </Elements>
  )
}

export default App
