"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import SpaceLifestyle from "@/components/SpaceLifestyle";

export default function Home() {
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 1.2;
      setNightMode(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFBF2] text-black">
      <Hero />

      <section className="bg-[#FFFBF2] text-black">
        <MenuHighlights />
      </section>

      <section
        className={`transition-colors duration-1000 ${
          nightMode
            ? "bg-gradient-to-b from-[#2B1E1A] to-[#120C0A] text-[#F5EFE6]"
            : "bg-[#FFFBF2] text-black"
        }`}
      >
        <SpaceLifestyle />
      </section>
    </main>
  );
}