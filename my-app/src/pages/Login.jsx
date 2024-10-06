import React, { useState } from "react";
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
          <div className="relative">
            <FaEnvelope className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              id="email"
              type="email"
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg"
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link to="/forgot-password" className="text-black hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Login
          </button>

          {/* Link to Sign Up */}
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
