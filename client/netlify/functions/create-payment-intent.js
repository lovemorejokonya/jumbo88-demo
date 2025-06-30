const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
  try {
    // Parse body if using POST
    const data = JSON.parse(event.body);
    const amount = data.amount;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      payment_method_types: ["card", "apple_pay"],
      currency: "usd",
      automatic_payment_methods: { enabled: false },
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            clientSecret: paymentIntent.client_secret
        })
    };
  } catch (error) {
    return {
        statusCode: 500,
        body: JSON.stringify({
            error: { message: error.message }
        })
    };
  }
};
