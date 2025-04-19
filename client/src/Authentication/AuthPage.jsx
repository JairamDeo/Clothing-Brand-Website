import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Dialog } from "@headlessui/react";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", password: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignIn) {
      if (!formData.name || !validateMobile(formData.mobile) || !validateEmail(formData.email) || !formData.password) return;
      setModalMessage("Account Created Successfully 🎉");
      setShowModal(true);
    } else {
      const isEmail = formData.email.includes("@gmail.com") && validateEmail(formData.email);
      const isMobile = validateMobile(formData.email);
      if (!(isEmail || isMobile) || !formData.password) return;
      setModalMessage("Login Successful 🎉");
      setShowModal(true);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100">
      {/* Left section - Full Background Image */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: "url('/assets/authbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Right section - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 transition-all duration-1000 ease-in-out">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 transition-all duration-700">
            {isSignIn ? "Welcome Back" : "Join Us"}
          </h2>
          <p className="text-sm text-gray-500">
            Sign {isSignIn ? "in" : "up"} with your email or {isSignIn ? "login" : "sign up"} to become our member.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {!isSignIn && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-500"
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  onChange={handleChange}
                  pattern="^[6-9]\d{9}$"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-500"
                  required
                />
              </>
            )}
            <input
              type={isSignIn ? "text" : "email"}
              name="email"
              placeholder={isSignIn ? "Email or Mobile" : "Email"}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-500"
              required
            />

            {isSignIn && (
              <div className="flex justify-between text-sm">
                <span></span>
                <a href="#" className="text-gray-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-500"
            >
              {isSignIn ? "Login" : "Create Account"}
            </button>

            <div className="flex items-center gap-2 text-sm justify-center mt-2 cursor-pointer hover:scale-105 transition-transform duration-300">
              <FcGoogle size={22} />
              <span className="text-black hover:underline">Continue with Google</span>
            </div>

            <div className="text-sm text-center mt-4">
              {isSignIn ? (
                <span>
                  Don’t have an account?{' '}
                  <button
                    type="button"
                    className="text-black font-medium hover:underline transition-all duration-500"
                    onClick={() => setIsSignIn(false)}
                  >
                    Sign up
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="text-black font-medium hover:underline transition-all duration-500"
                    onClick={() => setIsSignIn(true)}
                  >
                    Sign in
                  </button>
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      <Dialog open={showModal} onClose={() => setShowModal(false)} className="fixed z-50 inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
          <Dialog.Title className="text-xl font-semibold text-green-600">{modalMessage}</Dialog.Title>
          <button
            onClick={() => setShowModal(false)}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
