import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProgressTrackingLogin.css";
import { loginAdmin } from "../common/LoginAPI";

export default function ProgressTrackingLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  // ✅ Redirect if token exists
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      navigate("/all-schools"); // Already logged in, redirect to protected page
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginAdmin(formData.username, formData.password);
      localStorage.setItem("jwtToken", token);
      navigate("/all-schools");
    } catch (err) {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
    </div>
  );
}
