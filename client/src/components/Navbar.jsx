import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../css/navbar.css";
import "bootstrap";

const Navbar = () => {
  const navigate = useNavigate(); 
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <>
      <nav className="navbar-dark custom-bg-dark">
        <div className="container custom-margin">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/" className="nav-link px-2 text-secondary">Home</NavLink></li>
              <li><NavLink to="/faqs" className="nav-link px-2 text-white">FAQs</NavLink></li>
              <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2" onClick={handleLogin}>Login</button>
              <button type="button" className="btn btn-warning" onClick={handleSignUp}>Sign-up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
