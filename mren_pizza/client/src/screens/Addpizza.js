import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
export default function Addpizza() {
  const [name, setname] = useState('');
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');

  const dispatch = useDispatch();
  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;
  function formHandler(e) {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: { small: smallprice, medium: mediumprice, large: largeprice },
    };
    console.log(pizza);
    dispatch(addPizza(pizza));
  }
  return (
    <div>
      <div>
        <h1>Add pizza</h1>
        {loading && <Loading />}
        {error && <Error error="something went wrong" />}
        {success && <Success success="pizza added successfully" />}
        <form className="form-control" onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Small pizza price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium pizza price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Large pizza price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Pizza category veg or nonveg"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Insert Image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <br />
          <button className="btn" type="submit">
            Add Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
