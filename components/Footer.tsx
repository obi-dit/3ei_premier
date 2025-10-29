"use client";

import React from "react";

const BRAND = {
  name: "3i Premier Tech Solutions",
};

export default function Footer() {
  return (
    <footer className="py-12 border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold text-foreground">{BRAND.name}</p>
            <p className="text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Service Area</p>
            {/* <p className="text-muted-foreground mt-2">
              Cheyenne • Casper • Laramie • Gillette • Rock Springs • Sheridan
            </p> */}
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Certifications & Partners
            </p>
            <ul className="text-muted-foreground mt-2 space-y-1">
              <li>Microsoft 365 • Azure • Intune</li>
              <li>Fortinet • Cisco • Ubiquiti</li>
              <li>Datto • Acronis • SentinelOne</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
