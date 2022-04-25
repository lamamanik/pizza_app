import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const dispatch = useDispatch();
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: '40px' }}>Pizza Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <u>
                    <h1
                      style={{
                        color: 'brown',
                        fontSize: '20px',
                        fontWeight: '700',
                      }}
                    >
                      {item.name} [{item.varient}]
                    </h1>
                  </u>
                  <h1>
                    Price: {item.quantity} x {item.prices[0][item.varient]} ={' '}
                    {item.price}
                  </h1>
                  <h1 style={{ display: 'inline' }}> Quantity: </h1>
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      dispatch(
                        addToCart(
                          item,
                          item.quantity + parseInt(1),
                          item.varient
                        )
                      );
                    }}
                  ></i>
                  <b style={{ fontSize: '25px' }}>{item.quantity}</b>{' '}
                  <i
                    className="fa-solid fa-minus"
                    onClick={() => {
                      dispatch(
                        addToCart(
                          item,
                          item.quantity - parseInt(1),
                          item.varient
                        )
                      );
                    }}
                  ></i>{' '}
                  <hr
                    style={{
                      background:
                        'linear-gradient(to bottom, #0033cc 0%, #66ffff 100%)',
                      height: '2px',
                    }}
                  />
                </div>
                <div className="m-1 w-100 mt-4">
                  <img
                    src={item.image}
                    style={{ height: '80px', width: '80px' }}
                    alt=""
                  />
                </div>
                <div className="m-1 w-100">
                  <i
                    className="fa-solid fa-trash mt-5"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>{' '}
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: '45px' }}>SubTotal : {subtotal} /-</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
