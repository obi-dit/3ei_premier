"use client";

import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Add your authentication logic here
      console.log("Login attempt:", { email, password, rememberMe });
    }, 2000);
  };

  const socialLogins = [
    {
      name: "Microsoft",
      icon: "M",
      color: "from-[#00A4EF] to-[#0078D4]",
      bgColor: "bg-[#0078D4]/10",
    },
    {
      name: "Google",
      icon: "G",
      color: "from-[#DB4437] to-[#C23321]",
      bgColor: "bg-[#DB4437]/10",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#215096]/8 to-[#009688]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8BC34A]/6 to-[#009688]/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#215096]/3 to-[#8BC34A]/3 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30px_30px,rgba(33,80,150,0.03)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding & Info */}
          <motion.div
            className="hidden lg:block space-y-8"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            {/* Logo and Brand */}
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <Logo size="xl" />
                <div className="leading-tight">
                  <p className="font-bold text-2xl group-hover:text-[#215096] transition-colors">
                    3i Premier Tech
                  </p>
                  <p className="text-sm text-slate-600">Managed IT Solutions</p>
                </div>
              </Link>

              <motion.div
                className="h-1 w-24 rounded-full bg-gradient-to-r from-[#215096] via-[#009688] to-[#8BC34A]"
                animate={{
                  width: ["96px", "144px", "96px"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>

            {/* Welcome Message */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-slate-900">Welcome back to</span>
                <br />
                <span className="bg-gradient-to-r from-[#215096] via-[#009688] to-[#8BC34A] bg-clip-text text-transparent">
                  Your IT Portal
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Access your dashboard, manage support tickets, and monitor your
                IT infrastructure.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: Shield,
                  text: "Enterprise-grade security",
                  color: "text-[#215096]",
                  bgColor: "bg-[#215096]/5",
                },
                {
                  icon: CheckCircle2,
                  text: "24/7 monitoring & support",
                  color: "text-[#009688]",
                  bgColor: "bg-[#009688]/5",
                },
                {
                  icon: CheckCircle2,
                  text: "Real-time system insights",
                  color: "text-[#8BC34A]",
                  bgColor: "bg-[#8BC34A]/5",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <span className="text-slate-700 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: "500+", label: "Active Clients" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#215096] to-[#009688] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={scaleIn}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <Card className="rounded-3xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden relative">
              {/* Animated top border */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#215096] via-[#009688] to-[#8BC34A]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 100%" }}
              ></motion.div>

              <CardContent className="p-8 lg:p-10">
                {/* Mobile Logo */}
                <div className="lg:hidden mb-8 text-center">
                  <Link href="/" className="inline-flex flex-col items-center">
                    <Logo size="xl" />
                    <p className="font-bold text-xl mt-3">3i Premier Tech</p>
                    <p className="text-sm text-slate-600">
                      Managed IT Solutions
                    </p>
                  </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#215096]/10 to-[#009688]/10 rounded-full border border-[#215096]/20 mb-4"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-2 h-2 bg-[#8BC34A] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#215096]">
                      Secure Login
                    </span>
                  </motion.div>

                  <h2 className="text-3xl font-bold mb-2">Sign In</h2>
                  <p className="text-slate-600">
                    Access your IT management portal
                  </p>
                </div>

                {/* Error Message */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3"
                    >
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: focusedField === "email" ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Mail
                          className={`h-5 w-5 transition-colors ${
                            focusedField === "email"
                              ? "text-[#215096]"
                              : "text-slate-400"
                          }`}
                        />
                      </div>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-12 h-14 rounded-2xl text-base transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-[#215096] ring-2 ring-[#215096]/20"
                            : ""
                        }`}
                      />
                    </div>
                  </motion.div>

                  {/* Password Input */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: focusedField === "password" ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Lock
                          className={`h-5 w-5 transition-colors ${
                            focusedField === "password"
                              ? "text-[#009688]"
                              : "text-slate-400"
                          }`}
                        />
                      </div>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-12 pr-12 h-14 rounded-2xl text-base transition-all duration-300 ${
                          focusedField === "password"
                            ? "border-[#009688] ring-2 ring-[#009688]/20"
                            : ""
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </motion.div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-300 text-[#215096] focus:ring-[#215096]/20 cursor-pointer"
                      />
                      <span className="text-slate-700 group-hover:text-slate-900 transition-colors">
                        Remember me
                      </span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-[#215096] hover:text-[#009688] font-medium transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-[#215096] to-[#009688] hover:from-[#215096]/90 hover:to-[#009688]/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <motion.div
                          className="flex items-center gap-2"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Signing in...</span>
                        </motion.div>
                      ) : (
                        <>
                          <span>Sign In</span>
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-slate-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {socialLogins.map((social, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 group ${social.bgColor}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white font-bold`}
                      >
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {social.name}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-slate-600 mt-8">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-[#215096] hover:text-[#009688] transition-colors"
                  >
                    Sign up for free
                  </Link>
                </p>

                {/* Security Badge */}
                <motion.div
                  className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Shield className="h-4 w-4 text-[#8BC34A]" />
                  <span>Secured with 256-bit SSL encryption</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
