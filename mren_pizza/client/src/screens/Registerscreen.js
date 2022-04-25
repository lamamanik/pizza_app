import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
export default function Registerscreen() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { loading, success, error } = registerstate;
  const dispatch = useDispatch();
  function register() {
    if (password != cpassword) {
      alert('password not matching!');
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.table(user);
      dispatch(registerUser(user));
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: '35px' }} className="m-2">
            Register Now
          </h2>
          {loading && <Loading />}
          {success && <Success success="Successfully Registered" />}
          {error && <Error error="Email already registered" />}
          <div>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
              required
            />
            <button className="btn form-control mt-3" onClick={register}>
              {' '}
              Register
            </button>
            <a
              href="/login"
              style={{
                color: 'Green',
                textDecoration: 'none',
                fontFamily: 'bold',
              }}
              className="mt-2"
            >
              Click to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
