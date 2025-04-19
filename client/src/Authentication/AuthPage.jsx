import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

// Make sure your image path is correct
import authBG from '../assets/authbg.jpg';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle animation when switching between forms
  const toggleAuthMode = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsSignIn(!isSignIn);
      setIsAnimating(false);
    }, 500);

    // Reset form data and errors
    setFormData({ name: "", email: "", mobile: "", password: "" });
    setErrors({});
  };

  // Validation functions
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Login validation
    if (isSignIn) {
      if (!formData.email) {
        newErrors.email = "Email or mobile is required";
      } else {
        const isEmail = formData.email.includes("@gmail.com");
        const isMobile = /^[6-9]\d{9}$/.test(formData.email);

        if (!(isEmail || isMobile)) {
          newErrors.email = "Enter valid email or 10-digit mobile number";
        } else if (isEmail && !validateEmail(formData.email)) {
          newErrors.email = "Enter a valid Gmail address";
        }
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      }
    }
    // Signup validation
    else {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!formData.mobile) {
        newErrors.mobile = "Mobile number is required";
      } else if (!validateMobile(formData.mobile)) {
        newErrors.mobile = "Enter a valid 10-digit mobile number starting with 6-9";
      }

      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Enter a valid Gmail address";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (isSignIn) {
        setModalMessage("Login Successful 🎉");
      } else {
        setModalMessage("Account Created Successfully 🎉");
      }
      setShowModal(true);

      // Clear form data after success
      setFormData({ name: "", email: "", mobile: "", password: "" });
    }
  };

  // Close modal function
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left section - Full Background Image - Fixed for mobile */}
      <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-full">
        <img
          src={authBG}
          alt="Fashion model"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-white text-center px-6 transform transition-all duration-1000">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">FASHION ELITE</h1>
            <p className="text-lg md:text-2xl">Elevate Your Style</p>
          </div>
        </div>
      </div>

      {/* Right section - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-12 py-8 bg-gray-50">
        <div className={`w-full max-w-md ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-500 ease-in-out`}>
          {/* Form Header with animated underline */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
              {isSignIn ? "Welcome Back" : "Join Us"}
            </h2>
            <p className="text-gray-600 mt-2">
              {isSignIn
                ? "Sign in to continue your fashion journey"
                : "Create an account for exclusive offers"}
            </p>
          </div>

          {/* Form Container with enhanced animations */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl">
            {/* Login/Signup Form */}
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Signup Section with slide-in animation */}
              {!isSignIn && (
                <div className="space-y-4" id="signup-section">
                  {/* Comment: Signup section starts here */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="Full Name"
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 ${errors.name ? "border-red-500" : ""
                        }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      placeholder="Mobile Number"
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 ${errors.mobile ? "border-red-500" : ""
                        }`}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Common fields for both Login and Signup */}
              <div className="space-y-4" id="login-section">
                {/* Comment: Login section starts here */}
                <div>
                  <input
                    type={isSignIn ? "text" : "email"}
                    name="email"
                    value={formData.email}
                    placeholder={isSignIn ? "Email or Mobile" : "Email Address"}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 ${errors.email ? "border-red-500" : ""
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 ${errors.password ? "border-red-500" : ""
                      }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>

                {isSignIn && (
                  <div className="flex justify-end text-sm">
                    <a href="#" className="text-gray-600 hover:text-black hover:underline transition-colors duration-300">
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>

              {/* Submit Button with animation */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium mt-4"
              >
                {isSignIn ? "Login" : "Create Account"}
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center mt-6 mb-4">
                <div className="border-t border-gray-300 w-full"></div>
                <span className="bg-white px-3 text-xs text-gray-500 absolute">OR</span>
              </div>

              {/* Google Sign In */}
              <div className="flex items-center justify-center gap-2 py-3 px-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                <FcGoogle size={22} />
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </div>
            </form>
          </div>

          {/* Toggle between Login and Signup */}
          <div className="text-center mt-8">
            {isSignIn ? (
              <div className="text-sm">
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-black font-semibold hover:underline transition-all duration-300"
                  onClick={toggleAuthMode}
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div className="text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  className="text-black font-semibold hover:underline transition-all duration-300"
                  onClick={toggleAuthMode}
                >
                  Sign in
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Success Modal - Fixed version without using Dialog component */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black opacity-30" onClick={closeModal}></div>

            {/* Modal Content */}
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-sm mx-auto z-10 relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {modalMessage}
                </h3>

                <p className="text-gray-600 mb-6">
                  {isSignIn
                    ? "Welcome back to our exclusive collection."
                    : "Welcome to our fashion community!"}
                </p>

                <button
                  onClick={closeModal}
                  className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}