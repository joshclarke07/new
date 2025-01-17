import React, { useState } from "react";
import "../styles/Login.css"; // Import the CSS file
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // React Router hook for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    try {
      // Send POST request to login endpoint
      const response = await axios.post('http://localhost:1337/api/login', { email, password });

      // If login is successful, redirect to home page
      if (response.data.status === "ok") {
        setStatus("Login successful!");
        setEmail('');
        setPassword('');

        setTimeout(() => {
          navigate('/home'); // Adjust the route as needed
        }, 1000);
      } else {
        setStatus(response.data.message || "Login failed");
      }
    } catch (err) {
      setStatus(err.response?.data?.message || "An error occurred");
    }
  }

  return (
    <div className="container">
      <form onSubmit={loginUser} className="form">
        <h2 className="title">Login</h2>
        <div className="inputGroup">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">Login</button>
        <p className="text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}

export default Login;