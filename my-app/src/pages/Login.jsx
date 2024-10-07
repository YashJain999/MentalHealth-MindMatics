import React, { useState } from "react";
<<<<<<< HEAD
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom"; // Import Link for navigation

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Login</h2>
        <form className="space-y-6">
          {/* Email Field */}
=======
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing FontAwesome icons
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate from React Router
import backgroundImage from '../assets/images/MH_1.jpg'; // Adjust the path based on your folder structure
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'password':
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(value)) {
          errorMsg = 'Password must be 8 characters long, include uppercase, lowercase, a digit, and a special character.';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: errorMsg,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a payload with the necessary fields
    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await api.post('/api/token/', payload);
      if (response.status === 200) {
        alert("Login successful");
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        navigate('/home'); // Redirect to the home page
      }
    } catch (error) {
      console.error('login failed', error.response ? error.response.data : error.message);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="p-8 rounded-lg shadow-lg max-w-sm w-full"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field with Icon */}
>>>>>>> origin/karan
          <div className="relative">
            <FaEnvelope className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              id="email"
              type="email"
<<<<<<< HEAD
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg"
=======
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
>>>>>>> origin/karan
              placeholder="Enter your email"
              required
            />
          </div>

<<<<<<< HEAD
          {/* Password Field */}
=======
          {/* Password Field with Icon and Eye Toggle */}
>>>>>>> origin/karan
          <div className="relative">
            <FaLock className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              id="password"
<<<<<<< HEAD
              type={showPassword ? "text" : "password"}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg"
=======
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"} // Conditionally changing input type
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
>>>>>>> origin/karan
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEye className="w-6 h-6 text-gray-500" />
              ) : (
                <FaEyeSlash className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>
<<<<<<< HEAD

          {/* Forgot Password */}
          <div className="text-right">
            <Link to="/forgot-password" className="text-black hover:underline text-sm">
              Forgot Password?
            </Link>
=======
          <div className="flex space-x-10">
            <Link
              to="/forgotpassword"
              className="text-yellow-500 underline text-sm hover:text-yellow-700 focus:outline-none"
            >
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-yellow-500 underline text-sm hover:text-yellow-700 focus:outline-none">
              Don't have an account? Sign Up
            </Link>
            <Link to="/" className="text-yellow-500 underline text-sm hover:text-yellow-700 focus:outline-none">
              Back to Landing
            </Link>
>>>>>>> origin/karan
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Login
          </button>
<<<<<<< HEAD

          {/* Link to Sign Up */}
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>
=======
>>>>>>> origin/karan
        </form>
      </div>
    </div>
  );
};

export default Login;
