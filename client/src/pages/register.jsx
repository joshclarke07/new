import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1337/api/register", {
        name,
        email,
        password
      });
      const data = response.data;
      console.log(data);
      if (data.status === "ok") {
        setStatus("Registration successful!");
        setName('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          navigate("/login"); // Redirect to the login page
        }, 1000);
      } else {
        setStatus(data.message || "Registration failed");
      }
    } catch (error) {
      setStatus(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container">
      <form onSubmit={registerUser} className="form">
        <h2 className="title">Register</h2>
        <div className="inputGroup">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            required
          />
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
        <button type="submit" className="button">Create Account</button>
        <p className="text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}

export default Register;