import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/NavBar.png"; // Adjust the path to your logo image
import { useLocation } from "react-router-dom";
export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken"); // Correct key
    setIsLoggedIn(false);
    console.log("Logged out successfully");
    navigate("/");
  };

  console.log("isLoggedIn state:", isLoggedIn); // Debugging line

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="logo-img me-2" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-3" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold custom-hover" to="/">
                Home
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold custom-hover"
                  to="/temp-school"
                >
                  Progress-Tracking
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link fw-bold custom-hover" to="/careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bold custom-hover"
                // to="/progress-tracking-login"
              >
                Admin-Management
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <button
                  className="nav-link fw-bold custom-hover logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
