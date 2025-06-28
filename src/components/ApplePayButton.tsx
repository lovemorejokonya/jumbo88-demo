import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import type { PaymentRequest } from "@stripe/stripe-js";

const ApplePayButton: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: "Jumbo88 Demo Total",
          amount: 999, // $9.99
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        console.log("Can make payment:", result, pr);
        if (result) {
          setPaymentRequest(pr);
        }
      })
      .catch((error) => {
        console.error("Error checking payment request:", error);
      });
    }
  }, [stripe]);

  useEffect(() => {
    if (paymentRequest && stripe && elements) {
      paymentRequest.on("paymentmethod", async (event) => {
        try {
          const response = await fetch(
            "http://localhost:4242/create-payment-intent",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                amount: 999,
                currency: "usd",
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to create payment intent");
          }

          const { clientSecret } = await response.json();

          const { error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: event.paymentMethod.id,
            }
          );

          if (confirmError) {
            console.error("Payment confirmation error:", confirmError);
            event.complete("fail");
            alert(confirmError.message || "Payment failed.");
          } else {
            event.complete("success");
            alert("Payment successful!");
          }
        } catch (error) {
          console.error("Payment processing error:", error);
          event.complete("fail");
          alert("An unexpected error occurred.");
        }
      });
    }

    // Cleanup function to remove the event listener
    return () => {
      if (paymentRequest) {
        paymentRequest.off("paymentmethod");
      }
    };
  }, [paymentRequest, stripe, elements]);

  if (!paymentRequest) {
    return <div>Apple Pay is not available on this device/browser.</div>;
  }

  return (
    <PaymentRequestButtonElement
      options={{
        paymentRequest,
        style: {
          paymentRequestButton: {
            type: "buy",
            theme: "dark",
            height: "48px",
          },
        },
      }}
    />
  );
};

export default ApplePayButton;