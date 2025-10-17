"use client";

import React, { useState } from "react";
import { Check, MapPin, Shield, DollarSign, TrendingUp } from "lucide-react";

const BRAND = {
  name: "3i Premier Tech Solutions",
};

const bullets = [
  {
    title: "Local & Responsive",
    desc: "Wyoming‑based engineers with guaranteed SLA.",
    icon: MapPin,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Security‑first",
    desc: "EDR/XDR + 24/7 SOC and zero‑trust mindset.",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Fixed Monthly Pricing",
    desc: "Predictable OpEx—no surprises on your invoice.",
    icon: DollarSign,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "vCIO Guidance",
    desc: "Quarterly roadmap, budget planning, and vendor mgmt.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
];

export default function WhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section
      id="why"
      className="py-16 bg-gradient-to-br from-white via-gray-50/50 to-slate-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Why choose {BRAND.name}?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We combine enterprise‑grade tooling with small‑town
              accountability. Our team lives and works in Wyoming.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b, i) => {
                const Icon = b.icon;
                const isHovered = hoveredIndex === i;
                return (
                  <li
                    key={i}
                    className={`flex gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group ${
                      isHovered
                        ? "bg-gradient-to-r " +
                          b.color +
                          " shadow-lg scale-[1.02] -translate-x-1"
                        : "bg-background/50 hover:bg-background/80"
                    }`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-white/20 scale-110 rotate-6"
                          : "bg-gradient-to-br " + b.color + " opacity-80"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 transition-colors duration-300 ${
                          isHovered ? "text-white" : "text-white"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p
                          className={`font-semibold transition-colors duration-300 ${
                            isHovered ? "text-white" : "text-foreground"
                          }`}
                        >
                          {b.title}
                        </p>
                        <Check
                          className={`h-4 w-4 transition-all duration-300 ${
                            isHovered
                              ? "text-white opacity-100 scale-100"
                              : "text-green-500 opacity-0 scale-0"
                          }`}
                        />
                      </div>
                      <p
                        className={`text-sm mt-1 transition-colors duration-300 ${
                          isHovered ? "text-white/90" : "text-muted-foreground"
                        }`}
                      >
                        {b.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 shadow-lg p-8 bg-white">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-900">
              Our Performance
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  k: "99.95%",
                  v: "Uptime target",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  k: "15 min",
                  v: "First response SLA",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  k: "24/7",
                  v: "Monitoring & alerts",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  k: "NPS 75+",
                  v: "Client satisfaction",
                  color: "from-orange-500 to-red-500",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border border-gray-200 p-5 transition-all duration-300 cursor-pointer group relative overflow-hidden bg-white ${
                    hoveredStat === i
                      ? "shadow-xl scale-105 -translate-y-1 border-primary"
                      : "shadow-sm hover:shadow-md"
                  }`}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-gray-900">
                      {m.k}
                    </div>
                    <p className="text-sm text-gray-600 mt-1 font-medium group-hover:text-gray-900 transition-colors">
                      {m.v}
                    </p>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                      m.color
                    } transform origin-left transition-transform duration-300 ${
                      hoveredStat === i ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
