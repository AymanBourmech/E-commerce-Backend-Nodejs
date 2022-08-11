import express from "express";
const router = express.Router();
import stripe from "stripe";

const Stripe = stripe(process.env.STRIPE_SECRET_KEY);
router.post("/", async (req, res) => {
  const { amount, currency, receipt_email } = req.body;
  const paymentIntent = await Stripe.paymentIntents.create({
    amount,
    currency,
    receipt_email,
  });
  res.status(201).send({
    data: { client_secret: paymentIntent.client_secret },
  });
});
export default router;
