"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  HeartPulse,
  Briefcase,
  Factory,
  GraduationCap,
  Building2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    title: "Healthcare & Clinics",
    desc: "HIPAA‑ready security and EHR integrations.",
    icon: HeartPulse,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    title: "Professional Services",
    desc: "CPAs, law firms, architects—secure, compliant, productive.",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "Manufacturing",
    desc: "Reliable shop‑floor Wi‑Fi, OT segmentation, backups.",
    icon: Factory,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    title: "Nonprofits & Education",
    desc: "Grant‑savvy IT with discounts for 501(c)(3) and schools.",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    title: "Local Government",
    desc: "CIS Controls, CJIS awareness, continuity planning.",
    icon: Building2,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Hospitality & Retail",
    desc: "POS stability, guest Wi‑Fi, PCI‑conscious operations.",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
  },
];

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="industries"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored IT solutions for diverse sectors across Wyoming and beyond
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            const isHovered = hoveredIndex === i;
            return (
              <Card
                key={i}
                className={`rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group ${
                  isHovered
                    ? "border-transparent shadow-2xl -translate-y-2 scale-[1.02]"
                    : "border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg"
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${it.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-white/20 scale-110 rotate-6"
                          : it.bgColor + " group-hover:scale-105"
                      }`}
                    >
                      <Icon
                        className={`h-7 w-7 transition-all duration-300 ${
                          isHovered ? "text-white" : it.textColor
                        }`}
                      />
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 transition-all duration-300 ${
                        isHovered
                          ? "text-white opacity-100 translate-x-1"
                          : "text-gray-400 opacity-0 -translate-x-2"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-bold text-xl mb-3 transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {it.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isHovered ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {it.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                      it.color
                    } transform origin-left transition-all duration-300 ${
                      isHovered ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don&apos;t see your industry? We work with businesses of all types.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Let&apos;s discuss your needs
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
