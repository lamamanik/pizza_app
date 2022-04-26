import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Ordersscreen() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h2 style={{ fontSize: '45px' }}>My Order Lists</h2>
      <hr />
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8 m-2"
                style={{
                  backgroundColor: 'tan',
                  color: 'white',
                  fontWeight: '70px',
                }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-10">
                    <h2
                      style={{
                        fontFamily: 'sans-serif',
                        color: 'Black',
                      }}
                    >
                      Items
                    </h2>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <h1>
                            {item.name} [{item.varient}] x {item.quantity} ={' '}
                            {item.price}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-10">
                    <h2
                      style={{
                        fontFamily: 'sans-serif',
                        color: 'Black',
                      }}
                    >
                      Address
                    </h2>
                    <hr />
                    <h1>Street: {order.shippingAddress.street}</h1>
                    <h1>city: {order.shippingAddress.city}</h1>
                    <h1>country: {order.shippingAddress.country}</h1>
                    <h1>Postal Code: {order.shippingAddress.pincode}</h1>
                  </div>
                  <div className="text-left w-100 m-10">
                    <h2
                      style={{
                        fontFamily: 'sans-serif',
                        color: 'Black',
                      }}
                    >
                      Summary
                    </h2>
                    <hr />
                    <h1>Order Amount: {order.orderAmount}</h1>
                    <h1>Date: {order.createdAt.substring(0, 10)}</h1>
                    <h1>Transaction Id: {order.transactionId}</h1>
                    <h1>Order Id: {order._id}</h1>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
