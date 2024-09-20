import React from "react";
import { Typography, useTheme } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));


  // handle logout
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

  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0 navbar-title" >
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
              <Typography variant="h1" color="white" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
                AI Hub
              </Typography>
            </a>
          </div>


          <div className="col-md-3 text-end">
            {loggedIn ? (
              <>
                <NavLink to="/" className="btn btn-outline-primary me-2">
                  Home
                </NavLink>
                <button type="button" className="btn btn-outline-danger me-2" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-primary me-2">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn btn-primary">
                  Sign-up
                </NavLink>
              </>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
