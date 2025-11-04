"use client";

import React, { useState } from "react";
import {
  Check,
  Shield,
  Headset,
  Cloud,
  Server,
  Mail,
  BadgeCheck,
  ArrowRight,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BRAND = {
  phone: "(307) 555‑0149",
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

export default function Plans() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const handlePlanClick = (link: string) => {
    window.open(link, "_blank");
  };

  const tiers = [
    {
      name: "Essential",
      monthlyPrice: 79,
      annualPrice: 71,
      icon: Headset,
      color: "from-[#4A8FD9] to-[#5BA3E0]",
      bgColor: "bg-[#4A8FD9]/10",
      borderColor: "border-[#4A8FD9]/20",
      link: "https://buy.stripe.com/fZufZg8rM1dr8YkaC9gbm03",
      pitch: "Best for teams getting started with managed IT.",
      features: [
        { text: "Unlimited remote support", icon: Headset },
        { text: "RMM + patching", icon: Shield },
        { text: "AV/EDR agent", icon: Shield },
        { text: "Microsoft 365 admin", icon: Cloud },
        { text: "Monthly reporting", icon: BadgeCheck },
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 119,
      annualPrice: 107,
      icon: Shield,
      color: "from-[#26B5A6] to-[#3DC9BA]",
      bgColor: "bg-[#26B5A6]/10",
      borderColor: "border-[#26B5A6]/30",
      link: "https://buy.stripe.com/28E5kCcI2aO16QcaC9gbm00",
      pitch: "Security‑forward plan with compliance basics.",
      features: [
        { text: "Everything in Essential", icon: Check },
        { text: "24/7 monitoring + alerting", icon: Shield },
        { text: "Email security & training", icon: Mail },
        { text: "Quarterly vCIO roadmap", icon: BadgeCheck },
        { text: "Onsite hours bank (discounted)", icon: Server },
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: null,
      annualPrice: null,
      icon: Server,
      color: "from-[#A5D96A] to-[#B8E285]",
      bgColor: "bg-[#A5D96A]/10",
      borderColor: "border-[#A5D96A]/20",
      pitch: "Advanced security, SOC, and governance.",
      link: "https://buy.stripe.com/3cs8w88rM1dr8YkaEF",
      features: [
        { text: "XDR + SOC 24/7", icon: Shield },
        { text: "SIEM + log retention", icon: Server },
        { text: "BCDR + DR testing", icon: Cloud },
        { text: "Policy/SOP & audit prep", icon: BadgeCheck },
        { text: "Dedicated TAM & vCISO", icon: Headset },
      ],
    },
  ];

  return (
    <motion.section
      id="plans"
      className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#215096]/5 to-[#009688]/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8BC34A]/5 to-[#009688]/5 rounded-full blur-3xl"
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
              Pricing Plans
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#4A8FD9] via-[#26B5A6] to-[#A5D96A] bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Per‑user pricing with no long‑term lock‑ins. Choose monthly or
            annual billing. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          {/* <motion.div
            className="inline-flex items-center gap-4 p-2 bg-card rounded-full shadow-lg border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span
              className={`px-4 py-2 text-sm font-semibold transition-colors ${
                !isAnnual ? "text-[#4A8FD9]" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isAnnual
                  ? "bg-gradient-to-r from-[#4A8FD9] to-[#26B5A6]"
                  : "bg-muted"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{
                  left: isAnnual ? "calc(100% - 28px)" : "4px",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              ></motion.div>
            </motion.button>
            <span
              className={`px-4 py-2 text-sm font-semibold transition-colors ${
                isAnnual ? "text-[#4A8FD9]" : "text-muted-foreground"
              }`}
            >
              Annual
            </span>
            {isAnnual && (
              <motion.span
                className="px-3 py-1 bg-gradient-to-r from-[#A5D96A] to-[#B8E285] text-white text-xs font-bold rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                Save 10%
              </motion.span>
            )}
          </motion.div> */}
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            const displayPrice = tier.monthlyPrice
              ? isAnnual
                ? tier.annualPrice
                : tier.monthlyPrice
              : null;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                onHoverStart={() => setHoveredPlan(index)}
                onHoverEnd={() => setHoveredPlan(null)}
                className="relative"
              >
                {/* Popular Badge for Professional Plan */}
                {tier.highlight && (
                  <motion.div
                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="px-6 py-2 bg-gradient-to-r from-[#26B5A6] to-[#3DC9BA] text-white text-sm font-bold rounded-full shadow-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ⭐ Most Popular
                    </motion.div>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{
                    y: tier.highlight ? -16 : -12,
                    scale: 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card
                    className={`relative overflow-hidden ${
                      tier.highlight
                        ? "border-3 border-[#26B5A6] shadow-2xl"
                        : "border shadow-lg"
                    } rounded-3xl h-full group backdrop-blur-sm ${
                      tier.highlight ? "bg-card" : "bg-card/80"
                    }`}
                  >
                    {/* Animated Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      animate={{
                        opacity: hoveredPlan === index ? 0.08 : 0,
                      }}
                    ></motion.div>

                    {/* Corner Decoration */}
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tier.color} rounded-bl-full`}
                      initial={{ opacity: 0.05 }}
                      animate={{
                        opacity: hoveredPlan === index ? 0.15 : 0.05,
                        scale: hoveredPlan === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>

                    <CardContent className="relative p-8 flex flex-col h-full">
                      {/* Plan Icon */}
                      <motion.div
                        className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl ${tier.bgColor} mb-6`}
                        animate={{
                          scale: hoveredPlan === index ? [1, 1.1, 1] : 1,
                          rotate: hoveredPlan === index ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon
                          className={`h-8 w-8 ${
                            index === 0
                              ? "text-[#215096]"
                              : index === 1
                              ? "text-[#009688]"
                              : "text-[#8BC34A]"
                          }`}
                        />
                      </motion.div>

                      {/* Plan Name */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                          {tier.name}
                        </h3>
                        <motion.div
                          className={`h-1 rounded-full bg-gradient-to-r ${tier.color}`}
                          animate={{
                            width: hoveredPlan === index ? "100%" : "40%",
                          }}
                          transition={{ duration: 0.3 }}
                        ></motion.div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          {displayPrice ? (
                            <>
                              <motion.span
                                className="text-5xl font-bold text-foreground"
                                key={displayPrice}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                ${displayPrice}
                              </motion.span>
                              <span className="text-muted-foreground text-lg">
                                /user/mo
                              </span>
                            </>
                          ) : (
                            <span className="text-4xl font-bold text-foreground">
                              Custom
                            </span>
                          )}
                        </div>
                        {displayPrice && isAnnual && (
                          <motion.p
                            className="text-sm text-[#A5D96A] font-semibold mt-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            💰 Save $
                            {(tier.monthlyPrice! - tier.annualPrice!) * 12}/year
                          </motion.p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {tier.pitch}
                      </p>

                      {/* Features List */}
                      <div className="flex-1 mb-8">
                        <div className="space-y-4">
                          {tier.features.map((feature, featureIndex) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <motion.div
                                key={featureIndex}
                                className="flex items-start gap-3 group/feature"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                whileHover={{ x: 5 }}
                              >
                                <motion.div
                                  className={`flex-shrink-0 w-6 h-6 rounded-lg ${tier.bgColor} flex items-center justify-center mt-0.5`}
                                  animate={{
                                    scale:
                                      hoveredPlan === index ? [1, 1.2, 1] : 1,
                                  }}
                                  transition={{
                                    delay: featureIndex * 0.05,
                                    duration: 0.3,
                                  }}
                                >
                                  <FeatureIcon
                                    className={`h-4 w-4 ${
                                      index === 0
                                        ? "text-[#4A8FD9]"
                                        : index === 1
                                        ? "text-[#26B5A6]"
                                        : "text-[#A5D96A]"
                                    }`}
                                  />
                                </motion.div>
                                <span className="text-sm text-muted-foreground leading-relaxed group-hover/feature:text-foreground transition-colors">
                                  {feature.text}
                                </span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href={displayPrice ? `${tier.link}` : "#contact"}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`w-full h-12 rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 ${
                            tier.highlight
                              ? "bg-gradient-to-r from-[#26B5A6] to-[#3DC9BA] hover:from-[#26B5A6]/90 hover:to-[#3DC9BA]/90 text-white"
                              : "bg-card border-2 border-border text-foreground hover:border-border hover:bg-card/80"
                          }`}
                        >
                          {displayPrice ? "Get Started" : "Contact Sales"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.a>

                      {/* Additional Info */}
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        {displayPrice
                          ? "No setup fees • Cancel anytime"
                          : "Custom quote within 24 hours"}
                      </p>
                    </CardContent>

                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      animate={{
                        background:
                          hoveredPlan === index
                            ? "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)"
                            : "transparent",
                        x: hoveredPlan === index ? ["0%", "200%"] : "0%",
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-[#215096]/10 via-[#009688]/10 to-[#8BC34A]/10 rounded-3xl p-12 border border-[#215096]/20">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#215096]/5 to-[#009688]/5"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            ></motion.div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#4A8FD9] to-[#26B5A6] bg-clip-text text-transparent">
                Not sure which plan is right for you?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Let&apos;s discuss your specific needs. We&apos;ll create a
                custom IT strategy that fits your business and budget perfectly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="group px-8 py-4 h-auto text-lg font-semibold bg-gradient-to-r from-[#4A8FD9] to-[#26B5A6] hover:from-[#4A8FD9]/90 hover:to-[#26B5A6]/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.a>
                <motion.a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="px-8 py-4 h-auto text-lg font-semibold border-2 border-[#26B5A6] text-[#26B5A6] hover:bg-[#26B5A6] hover:text-white transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Button>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#26B5A6]" />
            <span>No Long-term Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-[#A5D96A]" />
            <span>Money-back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Headset className="h-5 w-5 text-[#4A8FD9]" />
            <span>24/7 Support Included</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
