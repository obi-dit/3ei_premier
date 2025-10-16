"use client";

import React, { useState } from "react";
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [focusedField, setFocusedField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
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

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold mb-2">
                        Reset Password
                      </h2>
                      <p className="text-slate-600">
                        Enter your email and we'll send you a reset link
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        animate={{ scale: focusedField ? 1.02 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <Mail
                              className={`h-5 w-5 transition-colors ${
                                focusedField
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
                            onFocus={() => setFocusedField(true)}
                            onBlur={() => setFocusedField(false)}
                            className={`pl-12 h-14 rounded-2xl text-base transition-all duration-300 ${
                              focusedField
                                ? "border-[#215096] ring-2 ring-[#215096]/20"
                                : ""
                            }`}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-[#215096] to-[#009688] hover:from-[#215096]/90 hover:to-[#009688]/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group disabled:opacity-50"
                        >
                          {isLoading ? (
                            <span>Sending reset link...</span>
                          ) : (
                            <>
                              <span>Send Reset Link</span>
                              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>

                    {/* Back to Login */}
                    <div className="mt-6 text-center">
                      <Link
                        href="/login"
                        className="inline-flex items-center gap-2 text-sm text-[#215096] hover:text-[#009688] font-medium transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to login
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2,
                      }}
                      className="inline-flex w-24 h-24 items-center justify-center rounded-full bg-gradient-to-br from-[#8BC34A] to-[#CDDC39] mb-6"
                    >
                      <CheckCircle2 className="h-12 w-12 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4">
                      Check Your Email
                    </h3>
                    <p className="text-slate-600 mb-6">
                      We've sent a password reset link to <br />
                      <span className="font-semibold text-[#215096]">
                        {email}
                      </span>
                    </p>
                    <p className="text-sm text-slate-500 mb-8">
                      Didn't receive the email? Check your spam folder or{" "}
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-[#215096] hover:text-[#009688] font-medium"
                      >
                        try again
                      </button>
                    </p>

                    <Link href="/login">
                      <Button className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#215096] to-[#009688] hover:from-[#215096]/90 hover:to-[#009688]/90 text-white">
                        Back to Login
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Security Badge */}
              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Shield className="h-4 w-4 text-[#8BC34A]" />
                <span>Secure password reset process</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
