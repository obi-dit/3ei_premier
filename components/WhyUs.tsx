"use client";

import React from "react";
import { Check } from "lucide-react";

const BRAND = {
  name: "3i Premier Tech Solutions",
};

const bullets = [
  {
    title: "Local & Responsive",
    desc: "Wyoming‑based engineers with guaranteed SLA.",
  },
  {
    title: "Security‑first",
    desc: "EDR/XDR + 24/7 SOC and zero‑trust mindset.",
  },
  {
    title: "Fixed Monthly Pricing",
    desc: "Predictable OpEx—no surprises on your invoice.",
  },
  {
    title: "vCIO Guidance",
    desc: "Quarterly roadmap, budget planning, and vendor mgmt.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Why choose {BRAND.name}?</h2>
            <p className="mt-4 text-muted-foreground">
              We combine enterprise‑grade tooling with small‑town
              accountability. Our team lives and works in Wyoming.
            </p>
            <ul className="mt-6 space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">{b.title}</p>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border shadow-sm p-6 bg-white">
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "99.95%", v: "Uptime target" },
                { k: "15 min", v: "First response SLA" },
                { k: "24/7", v: "Monitoring & alerts" },
                { k: "NPS 75+", v: "Client satisfaction" },
              ].map((m, i) => (
                <div key={i} className="rounded-2xl border p-4">
                  <p className="text-2xl font-semibold">{m.k}</p>
                  <p className="text-xs text-muted-foreground">{m.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
