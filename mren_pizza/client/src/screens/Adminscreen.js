import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import Addpizza from './Addpizza';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Userslist from './userslist';

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = '/';
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
          <ul className="adminfunctions">
            <li>
              {' '}
              <Link to={'/admin/userslist'} passHref>
                Users list
              </Link>
            </li>
            <li>
              {' '}
              <Link to={'/admin/pizzaslist'} passHref>
                Pizza List
              </Link>
            </li>
            <li>
              {' '}
              <Link to={'/admin/addpizza'} passHref>
                Add Pizza
              </Link>
            </li>
            <li>
              {' '}
              <Link to={'/admin/orderslist'} passHref>
                Orders List
              </Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/admin" exact component={Userslist} />
              <Route path="/admin/userslist" exact component={Userslist} />
              <Route path="/admin/orderslist" exact component={Orderslist} />
              <Route path="/admin/pizzaslist" exact component={Pizzaslist} />
              <Route path="/admin/addpizza" exact component={Addpizza} />

              {/*<Route path="" exact element={< />} />
              <Route path="/admin/" exact element={< />} />
              <Route path="/admin/" exact element={< />} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
