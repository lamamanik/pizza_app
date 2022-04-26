import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Error from './Error';
import Loading from './Loading';
import Success from './Success';

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="order successful" />}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51KsQyGCzHo9mfhtGFrBI1R1tBO4wLKmf4QPGdtlTzKyww3BCFbzq0C5bFMOq8JlMIGIZNdBqfApSlskzx36ZU91B00VkwkCJKe"
        currency="NPR"
      >
        <button className="btn">Pay now</button>
      </StripeCheckout>
    </div>
  );
}
