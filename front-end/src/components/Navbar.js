import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link aa ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className=  {`nav-link a ${
                  location.pathname === "/about" ? "active" : ""
                }` }
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? (
            <form className="d-flex">
              <Link to="/login" className="btn btn-primary mx-1">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary mx-2">
                SignUp
              </Link>
            </form>
          ) : (
            <button onClick={handleClick} className="btn btn-primary mx-1 log-out-btn">
              LogOut
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
