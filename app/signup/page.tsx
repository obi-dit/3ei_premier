"use client";

import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Building2,
  Phone,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Signup attempt:", formData);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#215096]/8 to-[#009688]/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8BC34A]/6 to-[#009688]/6 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-3xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#215096] via-[#009688] to-[#8BC34A]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 100%" }}
            ></motion.div>

            <CardContent className="p-8 lg:p-10">
              {/* Logo */}
              <div className="text-center mb-8">
                <Link href="/" className="inline-flex flex-col items-center">
                  <Logo size="xl" />
                  <p className="font-bold text-xl mt-3">3i Premier Tech</p>
                </Link>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                <p className="text-slate-600">
                  Start your IT management journey
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <motion.div
                  animate={{ scale: focusedField === "fullName" ? 1.02 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <User
                        className={`h-5 w-5 transition-colors ${
                          focusedField === "fullName"
                            ? "text-[#215096]"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                    <Input
                      placeholder="Full Name"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField(null)}
                      className={`pl-12 h-12 rounded-2xl transition-all ${
                        focusedField === "fullName"
                          ? "border-[#215096] ring-2 ring-[#215096]/20"
                          : ""
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  animate={{ scale: focusedField === "email" ? 1.02 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Mail
                        className={`h-5 w-5 transition-colors ${
                          focusedField === "email"
                            ? "text-[#009688]"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`pl-12 h-12 rounded-2xl transition-all ${
                        focusedField === "email"
                          ? "border-[#009688] ring-2 ring-[#009688]/20"
                          : ""
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Company & Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    animate={{ scale: focusedField === "company" ? 1.02 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Building2
                          className={`h-5 w-5 transition-colors ${
                            focusedField === "company"
                              ? "text-[#8BC34A]"
                              : "text-slate-400"
                          }`}
                        />
                      </div>
                      <Input
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-12 h-12 rounded-2xl transition-all ${
                          focusedField === "company"
                            ? "border-[#8BC34A] ring-2 ring-[#8BC34A]/20"
                            : ""
                        }`}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ scale: focusedField === "phone" ? 1.02 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Phone
                          className={`h-5 w-5 transition-colors ${
                            focusedField === "phone"
                              ? "text-[#1976D2]"
                              : "text-slate-400"
                          }`}
                        />
                      </div>
                      <Input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-12 h-12 rounded-2xl transition-all ${
                          focusedField === "phone"
                            ? "border-[#1976D2] ring-2 ring-[#1976D2]/20"
                            : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Password */}
                <motion.div
                  animate={{ scale: focusedField === "password" ? 1.02 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Lock
                        className={`h-5 w-5 transition-colors ${
                          focusedField === "password"
                            ? "text-[#215096]"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField(null)}
                      className={`pl-12 pr-12 h-12 rounded-2xl transition-all ${
                        focusedField === "password"
                          ? "border-[#215096] ring-2 ring-[#215096]/20"
                          : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Confirm Password */}
                <motion.div
                  animate={{
                    scale: focusedField === "confirmPassword" ? 1.02 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Lock
                        className={`h-5 w-5 transition-colors ${
                          focusedField === "confirmPassword"
                            ? "text-[#009688]"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      onFocus={() => setFocusedField("confirmPassword")}
                      onBlur={() => setFocusedField(null)}
                      className={`pl-12 pr-12 h-12 rounded-2xl transition-all ${
                        focusedField === "confirmPassword"
                          ? "border-[#009688] ring-2 ring-[#009688]/20"
                          : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Terms Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-[#215096] focus:ring-[#215096]/20 cursor-pointer"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-[#215096] hover:text-[#009688] font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-[#215096] hover:text-[#009688] font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading || !acceptTerms}
                    className="w-full h-12 rounded-2xl text-base font-semibold bg-gradient-to-r from-[#215096] to-[#009688] hover:from-[#215096]/90 hover:to-[#009688]/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span>Creating account...</span>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* Sign In Link */}
              <p className="text-center text-sm text-slate-600 mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#215096] hover:text-[#009688] transition-colors"
                >
                  Sign in
                </Link>
              </p>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Shield className="h-4 w-4 text-[#8BC34A]" />
                <span>Your data is secure and encrypted</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
