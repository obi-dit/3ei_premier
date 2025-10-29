"use client";

import React from "react";
import {
  Shield,
  Headset,
  Cloud,
  Server,
  ArrowRight,
  BadgeCheck,
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

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-background/95 overflow-hidden"
      initial="initial"
      animate="animate"
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#215096]/8 to-[#009688]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8BC34A]/6 to-[#009688]/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
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

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Trust Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-[#215096]/30 shadow-lg"
                variants={fadeInUp}
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#215096] to-[#009688] rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">WY</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#009688] to-[#8BC34A] rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">IT</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8BC34A] rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-[#215096]">
                    Trusted by 500+ Wyoming Businesses
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-foreground">Stress-free</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#4A8FD9] via-[#26B5A6] to-[#A5D96A] bg-clip-text text-transparent">
                    IT Solutions
                  </span>
                  <br />
                  {/* <span className="text-muted-foreground">for Wyoming</span> */}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Enterprise-grade technology support with local expertise.{" "}
                  <span className="font-semibold text-[#4A8FD9]">
                    24/7 monitoring
                  </span>
                  ,{" "}
                  <span className="font-semibold text-[#26B5A6]">
                    advanced security
                  </span>
                  , and{" "}
                  <span className="font-semibold text-[#A5D96A]">
                    predictable pricing
                  </span>{" "}
                  for Wyoming businesses.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#plans">
                  <Button className="group px-8 py-4 h-auto text-lg font-semibold bg-gradient-to-r from-[#4A8FD9] to-[#26B5A6] hover:from-[#4A8FD9]/90 hover:to-[#26B5A6]/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                    <span>Explore Plans</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="px-8 py-4 h-auto text-lg font-semibold border-2 border-[#26B5A6] text-[#26B5A6] hover:bg-[#26B5A6] hover:text-white transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl"
                  >
                    Free IT Assessment
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-[#A5D96A]" />
                  <span className="text-sm font-medium text-muted-foreground">
                    15-min Response SLA
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#26B5A6]" />
                  <span className="text-sm font-medium text-muted-foreground">
                    99.9% Uptime
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Headset className="h-5 w-5 text-[#4A8FD9]" />
                  <span className="text-sm font-medium text-muted-foreground">
                    24/7 Support
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Services Grid */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative z-10">
                {/* Main Services Container */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: Headset,
                      title: "24/7 Helpdesk",
                      description: "Unlimited support",
                      color: "from-[#4A8FD9] to-[#5BA3E0]",
                      bgColor: "bg-[#4A8FD9]/15",
                      iconColor: "text-[#4A8FD9]",
                      delay: "delay-0",
                    },
                    {
                      icon: Shield,
                      title: "Cybersecurity",
                      description: "Advanced protection",
                      color: "from-[#26B5A6] to-[#3DC9BA]",
                      bgColor: "bg-[#26B5A6]/15",
                      iconColor: "text-[#26B5A6]",
                      delay: "delay-100",
                    },
                    {
                      icon: Cloud,
                      title: "Cloud Services",
                      description: "Microsoft 365",
                      color: "from-[#A5D96A] to-[#B8E285]",
                      bgColor: "bg-[#A5D96A]/15",
                      iconColor: "text-[#A5D96A]",
                      delay: "delay-200",
                    },
                    {
                      icon: Server,
                      title: "Network Care",
                      description: "Infrastructure mgmt",
                      color: "from-[#5BA3E0] to-[#4A8FD9]",
                      bgColor: "bg-[#5BA3E0]/15",
                      iconColor: "text-[#5BA3E0]",
                      delay: "delay-300",
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -10 }}
                    >
                      <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl">
                        <CardContent className="p-8 text-center">
                          <div
                            className={`inline-flex p-4 rounded-2xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            {React.createElement(service.icon, {
                              className: `h-8 w-8 ${service.iconColor}`,
                            })}
                          </div>
                          <h3 className="font-bold text-lg text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </CardContent>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        ></div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#8BC34A]/30 to-[#CDDC39]/30 rounded-full blur-sm"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#009688]/30 to-[#00BCD4]/30 rounded-full blur-sm"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-[#215096]/20 to-[#1976D2]/20 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
