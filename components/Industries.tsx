"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Healthcare & Clinics",
    desc: "HIPAA‑ready security and EHR integrations.",
  },
  {
    title: "Professional Services",
    desc: "CPAs, law firms, architects—secure, compliant, productive.",
  },
  {
    title: "Manufacturing",
    desc: "Reliable shop‑floor Wi‑Fi, OT segmentation, backups.",
  },
  {
    title: "Nonprofits & Education",
    desc: "Grant‑savvy IT with discounts for 501(c)(3) and schools.",
  },
  {
    title: "Local Government",
    desc: "CIS Controls, CJIS awareness, continuity planning.",
  },
  {
    title: "Hospitality & Retail",
    desc: "POS stability, guest Wi‑Fi, PCI‑conscious operations.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Industries We Serve</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
