"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Check,
  ArrowLeft,
  User,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

// Plan data (matching Plans.tsx)
const planDetails = {
  essential: {
    name: "Essential",
    monthlyPrice: 79,
    annualPrice: 71,
    color: "from-[#4A8FD9] to-[#5BA3E0]",
    bgColor: "bg-[#4A8FD9]/10",
    features: [
      "Unlimited remote support",
      "RMM + patching",
      "AV/EDR agent",
      "Microsoft 365 admin",
      "Monthly reporting",
    ],
  },
  professional: {
    name: "Professional",
    monthlyPrice: 119,
    annualPrice: 107,
    color: "from-[#26B5A6] to-[#3DC9BA]",
    bgColor: "bg-[#26B5A6]/10",
    features: [
      "Everything in Essential",
      "24/7 monitoring + alerting",
      "Email security & training",
      "Quarterly vCIO roadmap",
      "Onsite hours bank (discounted)",
    ],
    highlight: true,
  },
  enterprise: {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    color: "from-[#A5D96A] to-[#B8E285]",
    bgColor: "bg-[#A5D96A]/10",
    features: [
      "XDR + SOC 24/7",
      "SIEM + log retention",
      "BCDR + DR testing",
      "Policy/SOP & audit prep",
      "Dedicated TAM & vCISO",
    ],
  },
};

function GetStartedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = (searchParams.get("plan") ||
    "professional") as keyof typeof planDetails;
  const billing = searchParams.get("billing") || "monthly";

  const plan = planDetails[planId];
  const isAnnual = billing === "annual";
  const displayPrice = plan.monthlyPrice
    ? isAnnual
      ? plan.annualPrice
      : plan.monthlyPrice
    : null;

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { ...formData, plan: planId, billing });
    setIsSubmitted(true);

    // Reset after 3 seconds and redirect
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
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
            className="inline-flex w-24 h-24 items-center justify-center rounded-full bg-gradient-to-br from-[#A5D96A] to-[#B8E285] mb-6"
          >
            <CheckCircle2 className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-4 text-foreground"
          >
            Thank You! 🎉
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mb-2 max-w-md"
          >
            We've received your request for the {plan.name} plan. Our team will
            contact you within 24 hours to get you started!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            Redirecting to homepage...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#plans"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Plans</span>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#4A8FD9] via-[#26B5A6] to-[#A5D96A] bg-clip-text text-transparent">
              Get Started with {plan.name}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Fill out the form below and we'll get you set up right away
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Plan Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-3xl border-0 shadow-xl bg-card overflow-hidden sticky top-24">
              {/* Animated top border */}
              <motion.div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.color}`}
              ></motion.div>

              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 text-foreground">
                    {plan.name} Plan
                  </h2>
                  {displayPrice && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">
                        ${displayPrice}
                      </span>
                      <span className="text-muted-foreground">/user/mo</span>
                    </div>
                  )}
                  {!displayPrice && (
                    <span className="text-3xl font-bold text-foreground">
                      Custom Pricing
                    </span>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">
                    {isAnnual ? "Annual billing" : "Monthly billing"}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-foreground">
                    Included Features:
                  </h3>
                  {plan.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-lg ${plan.bgColor} flex items-center justify-center mt-0.5`}
                      >
                        <Check className="h-4 w-4 text-[#4A8FD9]" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-muted/50 rounded-2xl p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-[#A5D96A]" />
                    <span className="font-semibold text-sm text-foreground">
                      What happens next?
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• We'll review your information</li>
                    <li>• Our team will contact you within 24 hours</li>
                    <li>• We'll schedule your onboarding session</li>
                    <li>• Get started with full support!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-3xl border-0 shadow-2xl bg-card overflow-hidden">
              {/* Animated top border */}
              <motion.div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.color}`}
              ></motion.div>

              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Your Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: focusedField === "name" ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <User
                          className={`h-4 w-4 transition-colors ${
                            focusedField === "name"
                              ? "text-[#4A8FD9]"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <Input
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-10 rounded-2xl transition-all duration-300 ${
                          focusedField === "name"
                            ? "border-[#4A8FD9] ring-2 ring-[#4A8FD9]/20"
                            : ""
                        }`}
                      />
                    </div>
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: focusedField === "email" ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Mail
                          className={`h-4 w-4 transition-colors ${
                            focusedField === "email"
                              ? "text-[#26B5A6]"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <Input
                        placeholder="john@company.com"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-10 rounded-2xl transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-[#26B5A6] ring-2 ring-[#26B5A6]/20"
                            : ""
                        }`}
                      />
                    </div>
                  </motion.div>

                  {/* Phone Input */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: focusedField === "phone" ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Phone
                          className={`h-4 w-4 transition-colors ${
                            focusedField === "phone"
                              ? "text-[#A5D96A]"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <Input
                        placeholder="(307) 555-0149"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-10 rounded-2xl transition-all duration-300 ${
                          focusedField === "phone"
                            ? "border-[#A5D96A] ring-2 ring-[#A5D96A]/20"
                            : ""
                        }`}
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className={`w-full h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r ${plan.color} hover:opacity-90 text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
                    >
                      Complete Sign Up
                    </Button>
                  </motion.div>

                  {/* Privacy Notice */}
                  <p className="text-xs text-center text-muted-foreground leading-relaxed">
                    🔒 By submitting, you agree to our Terms of Service and
                    Privacy Policy. No setup fees • Cancel anytime
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#4A8FD9] border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </div>
      }
    >
      <GetStartedContent />
    </Suspense>
  );
}
