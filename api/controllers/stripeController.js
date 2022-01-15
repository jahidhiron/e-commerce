// external imports
const stripe = require("stripe")(process.env.STRIPE_KEY);

const addPayment = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json({
          message: `Stripe error: ${stripeErr}`,
        });
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};

module.exports = { addPayment };
