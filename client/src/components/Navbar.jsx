import React from "react";
import { Typography, useTheme } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../css/navbar.css";
import "bootstrap";

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-dark z-index-3 py-3 border-bottom">
        <div className="container">
          <a
            className="navbar-brand text-white pt-3"
            href
            rel="tooltip"
            title="Designed and Coded by Creative Tim"
            data-placement="bottom"
            target="_blank"
          >
            AI-Tools
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav navbar-nav-hover mx-auto">
              <li className="nav-item px-3">
                <a className="nav-link text-white opacity-8">Pages</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white opacity-8">Utilities</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white opacity-8">Blocks</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white opacity-8">Docs</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <button className="btn bg-gradient-primary mb-0 text-white">Login</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// <div>
//   <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
//     <div className="container">
//       <a className="navbar-brand" href="#!">
//         <i className="fab fa-mdb fa-4x" />
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-mdb-toggle="collapse"
//         data-mdb-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i className="fas fa-bars" />
//       </button>
//       <div
//         className="collapse navbar-collapse"
//         id="navbarSupportedContent"
//       >
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="#!">
//               Our Story
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#!">
//               Membership
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#!">
//               Write
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#!">
//               Sign In
//             </a>
//           </li>
//           <button type="button" className="btn btn-dark ms-3">
//             Get Started
//           </button>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </div>;

//  <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-dark z-index-3 py-3">
//    <div className="container">
//      <a
//        className="navbar-brand text-white"
//        href
//        rel="tooltip"
//        title="Designed and Coded by Creative Tim"
//        data-placement="bottom"
//        target="_blank"
//      >
//        Soft UI Design System
//      </a>
//      <button
//        className="navbar-toggler"
//        type="button"
//        data-toggle="collapse"
//        data-target="#navigation"
//        aria-controls="navigation"
//        aria-expanded="false"
//        aria-label="Toggle navigation"
//      >
//        <span className="navbar-toggler-icon" />
//      </button>
//      <div className="collapse navbar-collapse" id="navigation">
//        <ul className="navbar-nav navbar-nav-hover mx-auto">
//          <li className="nav-item px-3">
//            <a className="nav-link text-white opacity-8">Pages</a>
//          </li>
//          <li className="nav-item px-3">
//            <a className="nav-link text-white opacity-8">Utilities</a>
//          </li>
//          <li className="nav-item px-3">
//            <a className="nav-link text-white opacity-8">Blocks</a>
//          </li>
//          <li className="nav-item px-3">
//            <a className="nav-link text-white opacity-8">Docs</a>
//          </li>
//        </ul>
//        <ul className="navbar-nav ms-auto">
//          <button className="btn bg-gradient-primary mb-0">Buy Now</button>
//        </ul>
//      </div>
//    </div>
//  </nav>;
