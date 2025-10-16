"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  User,
  Building2,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BRAND = {
  phone: "(307) 555‑0149",
  email: "hello@3ipremiertech.com",
  address: "Headquarters — State of Wyoming",
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
        message: "",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: BRAND.phone,
      description: "Mon-Fri 8AM-6PM MT",
      color: "from-[#215096] to-[#1976D2]",
      bgColor: "bg-[#215096]/5",
      iconColor: "text-[#215096]",
      href: `tel:${BRAND.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      value: BRAND.email,
      description: "24-hour response time",
      color: "from-[#009688] to-[#00BCD4]",
      bgColor: "bg-[#009688]/5",
      iconColor: "text-[#009688]",
      href: `mailto:${BRAND.email}`,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: BRAND.address,
      description: "Serving all of Wyoming",
      color: "from-[#8BC34A] to-[#CDDC39]",
      bgColor: "bg-[#8BC34A]/5",
      iconColor: "text-[#8BC34A]",
      href: "#",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#215096]/5 to-[#009688]/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-[#8BC34A]/5 to-[#009688]/5 rounded-full blur-3xl"
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#215096]/10 to-[#009688]/10 rounded-full border border-[#215096]/20 mb-6">
            <div className="w-2 h-2 bg-[#8BC34A] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#215096]">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#215096] via-[#009688] to-[#8BC34A] bg-clip-text text-transparent">
              Let&apos;s Talk About Your IT
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your technology? Fill out the form and we&apos;ll
            reach out within one business day.
          </p>
        </motion.div>

        {/* Contact Methods Cards */}
        <motion.div
          className="grid sm:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                variants={fadeInUp}
                onHoverStart={() => setHoveredContact(index)}
                onHoverEnd={() => setHoveredContact(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl h-full cursor-pointer group">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></motion.div>

                  {/* Corner Decoration */}
                  <motion.div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${method.color} rounded-bl-full`}
                    initial={{ opacity: 0.05 }}
                    animate={{
                      opacity: hoveredContact === index ? 0.15 : 0.05,
                      scale: hoveredContact === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  <CardContent className="relative p-6 text-center">
                    <motion.div
                      className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl ${method.bgColor} mb-4`}
                      animate={{
                        scale: hoveredContact === index ? [1, 1.1, 1] : 1,
                        rotate: hoveredContact === index ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`h-8 w-8 ${method.iconColor}`} />
                    </motion.div>

                    <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                    <p
                      className={`text-sm font-semibold ${method.iconColor} mb-1`}
                    >
                      {method.value}
                    </p>
                    <p className="text-xs text-slate-500">
                      {method.description}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      className={`mt-4 h-1 rounded-full bg-gradient-to-r ${method.color}`}
                      animate={{
                        width: hoveredContact === index ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </CardContent>
                </Card>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Main Info Card */}
            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#215096] to-[#009688] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Why Contact Us?</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Get a free IT assessment and discover how we can optimize
                      your technology infrastructure.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: CheckCircle2,
                      text: "Free consultation & IT assessment",
                      color: "text-[#8BC34A]",
                    },
                    {
                      icon: CheckCircle2,
                      text: "Custom proposal within 24 hours",
                      color: "text-[#009688]",
                    },
                    {
                      icon: CheckCircle2,
                      text: "No obligation, no pressure",
                      color: "text-[#215096]",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <item.icon
                        className={`h-5 w-5 ${item.color} flex-shrink-0`}
                      />
                      <span className="text-sm text-slate-700">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: Clock, label: "Response Time", value: "<1 hour" },
                { icon: Users, label: "Happy Clients", value: "500+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="rounded-2xl border-0 shadow-lg bg-white">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="h-8 w-8 text-[#009688] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-3xl border-0 shadow-2xl bg-white overflow-hidden relative">
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

              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <motion.div
                          className="relative"
                          animate={{
                            scale: focusedField === "name" ? 1.02 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <User
                              className={`h-4 w-4 transition-colors ${
                                focusedField === "name"
                                  ? "text-[#215096]"
                                  : "text-slate-400"
                              }`}
                            />
                          </div>
                          <Input
                            placeholder="Full name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`pl-10 rounded-2xl transition-all duration-300 ${
                              focusedField === "name"
                                ? "border-[#215096] ring-2 ring-[#215096]/20"
                                : ""
                            }`}
                          />
                        </motion.div>

                        {/* Email Input */}
                        <motion.div
                          className="relative"
                          animate={{
                            scale: focusedField === "email" ? 1.02 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <Mail
                              className={`h-4 w-4 transition-colors ${
                                focusedField === "email"
                                  ? "text-[#009688]"
                                  : "text-slate-400"
                              }`}
                            />
                          </div>
                          <Input
                            placeholder="Work email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`pl-10 rounded-2xl transition-all duration-300 ${
                              focusedField === "email"
                                ? "border-[#009688] ring-2 ring-[#009688]/20"
                                : ""
                            }`}
                          />
                        </motion.div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Company Input */}
                        <motion.div
                          className="relative"
                          animate={{
                            scale: focusedField === "company" ? 1.02 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <Building2
                              className={`h-4 w-4 transition-colors ${
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
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            onFocus={() => setFocusedField("company")}
                            onBlur={() => setFocusedField(null)}
                            className={`pl-10 rounded-2xl transition-all duration-300 ${
                              focusedField === "company"
                                ? "border-[#8BC34A] ring-2 ring-[#8BC34A]/20"
                                : ""
                            }`}
                          />
                        </motion.div>

                        {/* Employees Input */}
                        <motion.div
                          className="relative"
                          animate={{
                            scale: focusedField === "employees" ? 1.02 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <Users
                              className={`h-4 w-4 transition-colors ${
                                focusedField === "employees"
                                  ? "text-[#1976D2]"
                                  : "text-slate-400"
                              }`}
                            />
                          </div>
                          <Input
                            placeholder="# of employees"
                            type="number"
                            min={1}
                            value={formData.employees}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                employees: e.target.value,
                              })
                            }
                            onFocus={() => setFocusedField("employees")}
                            onBlur={() => setFocusedField(null)}
                            className={`pl-10 rounded-2xl transition-all duration-300 ${
                              focusedField === "employees"
                                ? "border-[#1976D2] ring-2 ring-[#1976D2]/20"
                                : ""
                            }`}
                          />
                        </motion.div>
                      </div>

                      {/* Message Textarea */}
                      <motion.div
                        animate={{
                          scale: focusedField === "message" ? 1.02 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Textarea
                          placeholder="What can we help you with?"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`min-h-32 rounded-2xl transition-all duration-300 resize-none ${
                            focusedField === "message"
                              ? "border-[#215096] ring-2 ring-[#215096]/20"
                              : ""
                          }`}
                        />
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="w-full h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-[#215096] to-[#009688] hover:from-[#215096]/90 hover:to-[#009688]/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                          <span>Send Message</span>
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </motion.div>

                      {/* Privacy Notice */}
                      <p className="text-xs text-center text-slate-500 leading-relaxed">
                        🔒 By submitting, you consent to being contacted about
                        services. We never sell your data.
                      </p>
                    </motion.form>
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
                      className="py-16 text-center"
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

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl font-bold mb-4"
                      >
                        Message Sent Successfully! 🎉
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-600 mb-2"
                      >
                        Thanks for reaching out! We&apos;ll get back to you
                        within one business day.
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-sm text-slate-500"
                      >
                        Check your email for a confirmation.
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-lg">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-[#8BC34A]" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-[#009688]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-[#215096]" />
              <span>No Obligation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
