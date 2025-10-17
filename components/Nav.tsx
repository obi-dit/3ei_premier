"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const BRAND = {
  name: "3i Premier Tech Solutions",
  tagline: "Modern Managed IT for the State of Wyoming",
};

const navItems = [
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "why", label: "Why Us" },
  { id: "plans", label: "Plans" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <Logo size="lg" />
            <div className="leading-tight">
              <p className="font-semibold text-lg">{BRAND.name}</p>
              <p className="text-xs text-muted-foreground">{BRAND.tagline}</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {n.label}
              </a>
            ))}
            {/* <Link href="/login">
              <Button
                variant="outline"
                className="rounded-2xl border-2 border-slate-200 hover:border-[#215096] hover:text-[#215096] transition-all"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <a href="#contact">
              <Button className="rounded-2xl bg-gradient-to-r from-[#215096] to-[#009688] hover:from-[#215096]/90 hover:to-[#009688]/90">
                Get Support
              </Button>
            </a> */}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button
                variant="outline"
                className="w-full rounded-2xl border-2 border-slate-200"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full rounded-2xl bg-gradient-to-r from-[#215096] to-[#009688]">
                Get Support
              </Button>
            </a>
          </div>
        </div>
      )} */}
    </header>
  );
}
