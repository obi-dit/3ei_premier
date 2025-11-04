"use client";

import React, { useState } from "react";
import {
  Check,
  Shield,
  Headset,
  Cloud,
  Server,
  Smartphone,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

const services = [
  {
    icon: Headset,
    title: "Managed Helpdesk",
    points: [
      "Unlimited remote support",
      "Onsite as needed",
      "Endpoint management (RMM)",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    points: [
      "EDR/XDR + SOC monitoring",
      "Email security & phishing training",
      "Compliance: HIPAA, CIS, NIST",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    points: [
      "Tenant hardening & licensing",
      "Migrations & backups",
      "Teams/SharePoint enablement",
    ],
  },
  {
    icon: Server,
    title: "Network & Server Care",
    points: [
      "Switches, Wi‑Fi, firewalls",
      "vCIO & roadmap planning",
      "BCDR & DR testing",
    ],
  },
  {
    icon: Smartphone,
    title: "Voice & Collaboration",
    points: [
      "Cloud VoIP provisioning",
      "Call flows & IVRs",
      "Video conferencing",
    ],
  },
  {
    icon: BadgeCheck,
    title: "IT Compliance & Audits",
    points: [
      "Gap assessments",
      "Policy & SOP development",
      "Vendor risk management",
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <motion.section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-background/95"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#215096]/10 to-[#009688]/10 rounded-full border border-[#215096]/20 mb-6">
            <div className="w-2 h-2 bg-[#8BC34A] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#215096]">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#4A8FD9] to-[#26B5A6] bg-clip-text text-transparent">
              Comprehensive IT Solutions
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            End-to-end technology support designed for businesses. From
            cybersecurity to cloud migration, we&apos;ve got you covered.
          </p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="group px-8 py-4 h-auto text-lg font-semibold bg-gradient-to-r from-[#4A8FD9] to-[#26B5A6] hover:from-[#4A8FD9]/90 hover:to-[#26B5A6]/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                  <span>Get Custom Proposal</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
            >
              <motion.div
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <Card className="relative overflow-hidden bg-card/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl h-full">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      index === 0
                        ? "from-[#215096]/5 to-[#1976D2]/5"
                        : index === 1
                        ? "from-[#009688]/5 to-[#00BCD4]/5"
                        : index === 2
                        ? "from-[#8BC34A]/5 to-[#CDDC39]/5"
                        : index === 3
                        ? "from-[#1976D2]/5 to-[#215096]/5"
                        : index === 4
                        ? "from-[#E91E63]/5 to-[#F06292]/5"
                        : "from-[#FF9800]/5 to-[#FFC107]/5"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></motion.div>

                  {/* Floating Icon */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-card to-card/80 shadow-lg flex items-center justify-center"
                    animate={{
                      rotate: activeService === index ? [0, 5, -5, 0] : 0,
                      scale: activeService === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon
                      className={`h-8 w-8 ${
                        index === 0
                          ? "text-[#215096]"
                          : index === 1
                          ? "text-[#009688]"
                          : index === 2
                          ? "text-[#8BC34A]"
                          : index === 3
                          ? "text-[#1976D2]"
                          : index === 4
                          ? "text-[#E91E63]"
                          : "text-[#FF9800]"
                      }`}
                    />
                  </motion.div>

                  <CardContent className="p-8 pt-12">
                    {/* Service Header */}
                    <div className="mb-6">
                      <motion.h3
                        className="text-xl font-bold mb-3 text-foreground group-hover:text-[#4A8FD9] transition-colors duration-300"
                        animate={{
                          color:
                            activeService === index ? "#4A8FD9" : undefined,
                        }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Animated Underline */}
                      <motion.div
                        className={`h-1 w-12 rounded-full ${
                          index === 0
                            ? "bg-gradient-to-r from-[#215096] to-[#1976D2]"
                            : index === 1
                            ? "bg-gradient-to-r from-[#009688] to-[#00BCD4]"
                            : index === 2
                            ? "bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]"
                            : index === 3
                            ? "bg-gradient-to-r from-[#1976D2] to-[#215096]"
                            : index === 4
                            ? "bg-gradient-to-r from-[#E91E63] to-[#F06292]"
                            : "bg-gradient-to-r from-[#FF9800] to-[#FFC107]"
                        }`}
                        animate={{
                          width: activeService === index ? 60 : 48,
                        }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>

                    {/* Service Points */}
                    <div className="space-y-3">
                      {service.points.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: pointIndex * 0.1 },
                          }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="flex-shrink-0 mt-1"
                            animate={{
                              scale: activeService === index ? [1, 1.2, 1] : 1,
                              rotate:
                                activeService === index ? [0, 5, -5, 0] : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Check
                              className={`h-4 w-4 ${
                                index === 0
                                  ? "text-[#215096]"
                                  : index === 1
                                  ? "text-[#009688]"
                                  : index === 2
                                  ? "text-[#8BC34A]"
                                  : index === 3
                                  ? "text-[#1976D2]"
                                  : index === 4
                                  ? "text-[#E91E63]"
                                  : "text-[#FF9800]"
                              }`}
                            />
                          </motion.div>
                          <span className="leading-relaxed">{point}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <motion.div
                      className="mt-8 pt-6 border-t border-slate-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: activeService === index ? 1 : 0.7,
                        y: activeService === index ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href="#contact"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${
                          index === 0
                            ? "text-[#215096] hover:text-[#1976D2]"
                            : index === 1
                            ? "text-[#009688] hover:text-[#00BCD4]"
                            : index === 2
                            ? "text-[#8BC34A] hover:text-[#CDDC39]"
                            : index === 3
                            ? "text-[#1976D2] hover:text-[#215096]"
                            : index === 4
                            ? "text-[#E91E63] hover:text-[#F06292]"
                            : "text-[#FF9800] hover:text-[#FFC107]"
                        } transition-colors duration-300`}
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </motion.a>
                    </motion.div>
                  </CardContent>

                  {/* Corner Accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 ${
                      index === 0
                        ? "bg-gradient-to-br from-[#215096]/10 to-transparent"
                        : index === 1
                        ? "bg-gradient-to-br from-[#009688]/10 to-transparent"
                        : index === 2
                        ? "bg-gradient-to-br from-[#8BC34A]/10 to-transparent"
                        : index === 3
                        ? "bg-gradient-to-br from-[#1976D2]/10 to-transparent"
                        : index === 4
                        ? "bg-gradient-to-br from-[#E91E63]/10 to-transparent"
                        : "bg-gradient-to-br from-[#FF9800]/10 to-transparent"
                    } rounded-bl-3xl`}
                    animate={{
                      opacity: activeService === index ? 1 : 0.3,
                      scale: activeService === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-[#4A8FD9]/10 via-[#26B5A6]/10 to-[#A5D96A]/10 rounded-3xl p-12 border border-[#4A8FD9]/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique. Let us create a tailored IT strategy
              that fits your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-8 py-3 bg-gradient-to-r from-[#4A8FD9] to-[#26B5A6] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Consultation
                </Button>
              </motion.a>
              <motion.a
                href="#plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="px-8 py-3 border-2 border-[#26B5A6] text-[#26B5A6] hover:bg-[#26B5A6] hover:text-white rounded-2xl transition-all duration-300"
                >
                  View Pricing Plans
                </Button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
