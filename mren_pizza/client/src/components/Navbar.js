import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  // Dashboard navigation function
  const goToDashboard = () => {
    window.location.href = "/admin"; // Redirect to /admin route
  };

  return (
    <div className="mt-5">
      <nav className="container  mx-auto navbar navbar-expand-lg shadow-lg p-3 bg-white rounded mb-4">
        <div>
          <a className="navbar-brand" href="/">
            PizzAhm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            {currentUser ? (
              <div className="dropdown mt-2 ">
                <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontFamily: "bold",
                  }}
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-bs-haspopup="true"
                  aria-bs-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                  {currentUser.isAdmin && ( // Only show if the user is an admin
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={goToDashboard} // Call goToDashboard directly on click
                    >
                      <li>Dashboard</li>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <li className="nav-item ">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item mr-4">
              <a className="nav-link" href="/cart">
                Cart{" "}
                <span>
                  <mark>
                    <b>{cartstate.cartItems.length}</b>
                  </mark>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
