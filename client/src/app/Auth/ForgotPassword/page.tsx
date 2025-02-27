"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock } from "lucide-react";
import Image from "next/image";

export default function PasswordResetPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordStrength, setPasswordStrength] = useState(0);

  const onSubmit = (data: any) => {
    // Handle password reset logic here
    console.log("Password reset submitted", data);
  };

  const password = watch("password", "");

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;
    setPasswordStrength(strength);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-blue-900/70 to-indigo-900/70  py-12 px-4 sm:px-6 lg:px-8 ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
      >
        <div className="text-center">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Reset Your Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                OTP Verification
              </label>
              <input
                id="otp"
                type="text"
                {...register("otp", {
                  required: "OTP is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "OTP must be 6 digits",
                  },
                })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter 6-digit OTP"
              />
              {errors.otp && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.otp.message as string}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-light-blue-500" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    onChange: (e) => checkPasswordStrength(e.target.value),
                  })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter new password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-light-blue-500 hover:text-light-blue-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message as string}
                </p>
              )}
              <div className="mt-2">
                <div className="text-xs text-gray-600 mb-1">
                  Password strength:
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${
                      passwordStrength < 3
                        ? "bg-red-500"
                        : passwordStrength < 5
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${passwordStrength * 20}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-light-blue-500" />
                </div>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm new password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-light-blue-500 hover:text-light-blue-600 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPassword.message as string}
                </p>
              )}
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 transition-colors duration-200"
            >
              Reset Password
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
