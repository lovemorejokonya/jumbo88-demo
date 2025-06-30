const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
  try {
    const session = await stripe.checkout.sessions.retrieve(event.query.session_id);

    return {
        statusCode: 200,
        body: JSON.stringify({
            status: session.status,
            customer_email: session.customer_details.email
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
