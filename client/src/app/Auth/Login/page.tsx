"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  function generateCaptcha() {
    return Math.random().toString(36).slice(2, 8).toUpperCase();
  }

  const onSubmit = (data: any) => {
    if (data.captcha !== captchaValue) {
      setError("captcha", { type: "manual", message: "Incorrect captcha" });
      setCaptchaValue(generateCaptcha());
      setUserCaptcha("");
    } else {
      console.log("Login successful", data);
    }
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
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Login ID */}
            <div className="mb-4">
              <label
                htmlFor="login-id"
                className="block text-sm font-medium bg-white text-black px-2 py-1 rounded-md w-fit"
              >
                Login ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-light-blue-500" />
                </div>
                <input
                  id="login-id"
                  type="text"
                  {...register("loginId", { required: "Login ID is required" })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your login ID"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium bg-white text-black px-2 py-1 rounded-md w-fit"
              >
                Password
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
                  })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
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
            </div>
          </div>

          {/* Captcha */}
          <div className="rounded-md shadow-sm">
            <label
              htmlFor="captcha"
              className="block text-sm font-medium bg-white text-black px-2 py-1 rounded-md w-fit"
            >
              Captcha
            </label>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-100 px-4 py-2 rounded-md font-mono text-lg flex-grow text-center">
                {captchaValue}
              </div>
              <button
                type="button"
                onClick={() => setCaptchaValue(generateCaptcha())}
                className="p-2 bg-light-blue-100 rounded-md text-light-blue-600 hover:bg-light-blue-200 focus:outline-none"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
            </div>
            <input
              id="captcha"
              type="text"
              {...register("captcha", {
                required: "Captcha is required",
                onChange: (e) => {
                  setUserCaptcha(e.target.value);
                  clearErrors("captcha");
                },
              })}
              className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 focus:z-10 sm:text-sm"
              placeholder="Enter captcha"
            />
          </div>

          {/* Error Messages */}
          {(errors.loginId || errors.password || errors.captcha) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-2"
            >
              {errors.loginId?.message?.toString()}
              {errors.password?.message?.toString()}
              {errors.captcha?.message?.toString()}
            </motion.div>
          )}

          {/* Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="/Auth/ForgotPassword"
                className="font-medium text-light-blue-600 hover:text-light-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 transition-colors duration-200"
            >
              Sign in
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
