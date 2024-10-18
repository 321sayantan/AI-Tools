import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../css/navbar.css";
import "bootstrap";
import Features from "./features";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("authToken");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      // await axios.post("http://localhost:5000/api/v1/auth/logout");
      await axios.post("https://tool-e.onrender.com/api/v1/auth/logout");
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
      <nav className="custom-bg-dark pt-2 pb-1">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo and brand */}
          <a
            href="/"
            className="d-flex align-items-center items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <div className="flex items-center">
              <img
                src="/images/logo.png"
                className="h-8 me-3 rounded-full bg-white p-0.5"
                alt="Tool-E Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                TOOL-E
              </span>
            </div>

            <div className={`w-full md:flex md:items-center md:w-auto res`}>
              <ul className="flex flex-col mt-4 items-start space-y-0 md:flex-row md:space-y-0 md:mt-0 md:space-x-4">
                <li>
                  <NavLink
                    to="#"
                    className="nav-link px-2 text-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("feature-section")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/imageGallary"
                    className="nav-link px-2 text-secondary"
                  >
                    Gallary
                  </NavLink>
                </li>
              </ul>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center p-2 text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Links and buttons (toggle visibility on mobile) */}
          <div
            className={`w-full md:flex md:items-center md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col mt-4 items-start space-y-0 md:flex-row md:space-y-0 md:mt-0 md:space-x-4 res1">
              <li>
                <NavLink
                  to="#"
                  className="nav-link px-2 text-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("feature-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/imageGallary"
                  className="nav-link px-2 text-secondary"
                >
                  Gallary
                </NavLink>
              </li>
            </ul>

            {/* Buttons */}
            <div className="text-end">
              {loggedIn ? (
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-light me-2"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleSignUp}
                  >
                    Sign-up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// <nav className="navbar-dark custom-bg-dark">
//   <div className="container custom-margin">
//     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//       <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//         <div className="flex items-center">
//           <img
//             src="/images/logo.png"
//             className="h-8 me-3 rounded-full bg-white p-0.5"
//             alt="Tool-E Logo"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             TOOL-E
//           </span>
//         </ div>
//       </a>

//       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

//         <li>
//           <NavLink to="/faqs" className="nav-link px-2 text-secondary"></NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="#"
//             className="nav-link px-2 text-secondary"
//             onClick={(e) => {
//               e.preventDefault();
//               document.getElementById('feature-section').scrollIntoView({ behavior: 'smooth' });
//             }}
//           >
//             Features
//           </NavLink>
//         </li>
//       </ul>

//       <div className="text-end">
//         {loggedIn ? (
//           <>
//             <button type="button" className="btn btn-outline-light me-2" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <button type="button" className="btn btn-outline-light me-2" onClick={handleLogin}>
//               Login
//             </button>
//             <button type="button" className="btn btn-warning" onClick={handleSignUp}>
//               Sign-up
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   </div>
// </nav>
