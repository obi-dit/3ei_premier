"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function WyomiMSPWebsite() {
  return (
    <main className="font-sans text-slate-900">
      <Nav />
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <Plans />
      <Contact />
      <Footer />
    </main>
  );
}
