import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
import { getAllPizzas } from '../actions/pizzaActions';

export default function Pizzaslist() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <h2>pizzas list</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table">
        <thead
          className="thead-light"
          style={{ fontFamily: 'sans-serif', fontSize: '20px' }}
        >
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Categories</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => {
              return (
                <tr>
                  <td>{pizza.name}</td>
                  <td>
                    Small: {pizza.prices[0]['small']} <br />
                    Medium: {pizza.prices[0]['medium']}
                    <br />
                    Large: {pizza.prices[0]['large']}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <i className="fa fa-trash m-2"></i>
                    <i className="fa fa-edit m-2"></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
