import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import Img from '../assets/aaonisa.png';
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./SignwithGoogle";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [showResetModal, setShowResetModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("User logged in successfully");
      window.location.href = "/profile";
      toast.success("User logged in successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  const handleForgetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent", {
        position: "top-center",
      });
      setShowResetModal(false);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <img src={Img} alt="aaonisa" className="w-32 h-32 mx-auto mb-6" />
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-blue-300`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-blue-300`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-[#B60F18] rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Login
              </button>
            </div>
            <p className="forgot-password text-right">
              New user{" "}
              <Link to="/sign_up" className="text-blue-500">
                Register Here
              </Link>
            </p>
            <p
              onClick={() => setShowResetModal(true)}
              className="forgot-password text-center text-blue-500 cursor-pointer"
            >
              Forgot Password?
            </p>
            <SignInwithGoogle />
          </form>
        </div>
      </div>
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Reset Password</h2>
            <p className="mb-4 text-center">Enter your email to reset your password.</p>
            <div className="mb-4">
              <input
                type="email"
                id="reset-email"
                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const email = document.getElementById("reset-email").value;
                  handleForgetPassword(email);
                }}
                className="px-4 py-2 bg-[#B60F18] text-white rounded-md"
              >
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
