"use client";

import { type ReactElement, useEffect } from "react";

import CTA from "./shared/components/layout/CTA";
import FAQ from "./shared/components/layout/FAQ";
import Features from "./shared/components/layout/Features";
import Hero from "./shared/components/layout/Hero";
import Pricing from "./shared/components/layout/Pricing";
import ScrollToTop from "./shared/components/layout/ScrollToTop";
import Templates from "./shared/components/layout/Templates";

export default function Home(): ReactElement {
  useEffect(() => {
    // Handle scroll animations
    const handleScroll = (): void => {
      const scrollElements = document.querySelectorAll(".scroll-animate");

      scrollElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight * 0.85) {
          element.classList.add("opacity-100");
          element.classList.remove("opacity-0");
          element.classList.remove("translate-y-4");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on load
    setTimeout(handleScroll, 100);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen  ">
      <Hero />
      <Features />
      <Templates />
      <Pricing />
      <FAQ />
      <CTA />

      <ScrollToTop />
    </main>
  );
}
