import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Userslist() {
  const dispatch = useDispatch();
  const getusersstate = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = getusersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Failed to load User list" />}
      <h1>users list</h1>
      <table className="table">
        <thead style={{ fontFamily: 'sans-serif', fontSize: '17px' }}>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Id date</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt.substring(0, 10)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
