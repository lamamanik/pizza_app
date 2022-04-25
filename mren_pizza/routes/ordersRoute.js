const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(
  'sk_test_51KqXraSGYXNblOKgd8flLFUCYVhMX2Fs1F7o4m2WA4gKs3juKOirSB203vsal2qYXXscVcjULD9SQmzEa6BiuimD00hG7xe5pa'
);

router.post('/placeorder', async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: 'npr',
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send('payment success');
    } else {
      res.send('payment failed');
    }
  } catch (error) {
    return res.status(400).json({ message: 'something went wrong' + error });
  }
});
module.exports = router;