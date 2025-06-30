const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
  try {
    // Parse body if using POST
    const data = JSON.parse(event.body);

    // Create checkout session
    const priceId = data.priceId;
    console.log({ priceId });
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${event.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            clientSecret: session.client_secret
        })
    };
  } catch (error) {
    console.log(error);
    return {
        statusCode: 500,
        body: JSON.stringify({
            error: { message: error.message }
        })
    };
  }
};
