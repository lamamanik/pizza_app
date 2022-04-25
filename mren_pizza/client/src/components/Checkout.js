import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';

export default function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51KqXraSGYXNblOKggKNzSRJGdHzIjUzANLFjtmEsuisIYJfAgg1ibGw77mjeE4ZB9ENZqM4iZtiBta13hAPixLdI00YrRWOfmo"
        currency="NPR"
      >
        <button className="btn">Pay now</button>
      </StripeCheckout>
    </div>
  );
}
