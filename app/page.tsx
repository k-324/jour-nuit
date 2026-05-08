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
        <section className="bg-[#FFFBF2] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl border-y border-black/10 py-16 text-center">
          <p className="font-en text-xs tracking-[0.3em] text-[#6F0000]">
            RESERVATION
          </p>

          <h2 className="mt-5 font-zh-title text-3xl tracking-[0.08em] text-black md:text-4xl">
            為你保留一個位置
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-zh text-base leading-8 text-black/60">
            無論是日常用餐、朋友聚會，或包場活動，
            歡迎透過官方 LINE 或電話與我們聯繫。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://lin.ee/NyOAsNg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rouge"
            >
              <span className="font-zh mr-2">官方 LINE</span>
              <span className="font-en text-[10px] tracking-[0.12em] text-white/70">
                Reserve via LINE
              </span>
            </a>

            <a
              href="tel:+886223418681"
              className="border border-black/20 px-8 py-3 font-zh text-sm tracking-[0.08em] text-black transition hover:border-[#6F0000] hover:text-[#6F0000]"
            >
              來電預約
              <span className="ml-2 font-en text-[10px] tracking-[0.12em] text-black/45">
                Call to Reserve
              </span>
            </a>
          </div>
        </div>
      </section>
      </section>
    </main>
  );
}