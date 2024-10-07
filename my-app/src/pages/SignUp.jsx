import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCalendarAlt, FaUserCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import backgroundImage from '../assets/images/MH_1.jpg'; // Adjust the path based on your folder structure
import api from "../api";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    userName: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    phoneNumber: '',
    guardianNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'phoneNumber':
      case 'guardianNumber':
        if (value.length !== 10) {  // Check if the number is not exactly 10 digits
          errorMsg = 'Phone number must be exactly 10 digits.';
        }
        break;
      case 'password':
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(value)) {
          errorMsg = 'Password must be 8 characters long, include uppercase, lowercase, a digit, and a special character.';
        }
        break;
      case 'age':
        if (!/^\d{2}$/.test(value)) {
          errorMsg = 'Age must be exactly 2 digits.';
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
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a payload with the necessary fields
    const payload = {
        username: formData.userName,
        age: formData.age,
        gender: formData.gender,
        email: formData.email,
        password: formData.password,
        phone_number: formData.phoneNumber,
        guardian_number: formData.guardianNumber,
    };

    try {
        const response = await api.post('/api/user/register/', payload); 
        if (response.status === 201){
          alert('User created successfully');
          navigate('/login'); // Redirect to the login page
        }
    } catch (error) {
      console.error('Registration failed', error.response ? error.response.data : error.message);
      alert('Registration failed. Please try again.');
    }
  };


  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Applying the background image
        fontFamily: "'Poppins', sans-serif", // Ensuring font consistency
      }}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md px-8 py-10"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',  // Semi-transparent white background
          backdropFilter: 'blur(10px)',  // Blur the background behind the div
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          border: '1px solid rgba(255, 255, 255, 0.3)', // Light border for glass effect
        }}
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div className="relative">
            <FaUser className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              placeholder="Username"
              required
            />
          </div>

          {/* Age Field */}
          <div className="relative">
            <FaCalendarAlt className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`w-full pl-12 py-3 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition`}
              placeholder="Age"
              required
            />
            {errors.age && <p className="text-red-500 text-lg font-bold">{errors.age}</p>}

          </div>

          {/* Gender Field */}
          <div className="relative">
            <FaUserCircle className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition appearance-none"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-12 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition`}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? (
                <FaEye className="w-6 h-6 text-gray-500" />
              ) : (
                <FaEyeSlash className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {errors.password && <p className="text-red-500 text-lg font-bold">{errors.password}</p>}
          </div>

          {/* Phone Number Field */}
          <div className="relative">
            <FaPhone className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full pl-12 py-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition`}
              placeholder="Phone Number"
              required
            />
            {errors.phoneNumber && <p className="text-red-500 text-lg font-bold">{errors.phoneNumber}</p>}
          </div>

          {/* Guardian Number Field */}
          <div className="relative">
            <FaPhone className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="number"
              name="guardianNumber"
              value={formData.guardianNumber}
              onChange={handleChange}
              className={`w-full pl-12 py-3 border ${errors.guardianNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition`}
              placeholder="Guardian Phone Number"
              required
            />
            {errors.guardianNumber && <p className="text-red-500 text-lg font-bold">{errors.guardianNumber}</p>}
          </div>

          {/* Navigate to Login Button */}
<div className="flex space-x-10">
  <button
    type="button"
    onClick={() => navigate('/login')}
    className="text-yellow-500 underline text-sm hover:text-yellow-700 focus:outline-none"
  >
    Already have an account? Login
  </button>
  <button
    type="button"
    onClick={() => navigate('/')}
    className="text-yellow-500 underline text-sm hover:text-yellow-700 focus:outline-none"
  >
    Back To Landing
  </button>
</div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
