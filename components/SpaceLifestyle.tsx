"use client";

import { useEffect, useState } from "react";

export default function SpaceLifestyle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.6;
      setDark(window.scrollY > trigger);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`transition-colors duration-700 py-28 px-6 md:px-12 ${
        dark
          ? "bg-gradient-to-b from-[#2B1E1A] to-[#120C0A] text-[#F5EFE6]"
          : "bg-[#FFFBF2] text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="leading-tight">
            <span className="block font-zh-title text-3xl mb-3 tracking-[0.08em]">
              空間與生活
            </span>
            <span
              className={`font-display ${
                dark ? "text-[#F5EFE6]/70" : "text-black/60"
              }`}
            >
              Space & Lifestyle
            </span>
          </h2>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p
            className={`font-zh text-base leading-8 ${
              dark ? "text-[#F5EFE6]/80" : "text-black/70"
            }`}
          >
           在城市的節奏之中，
           我們留下一個放慢腳步的地方。 
           無論是相聚、辦公，或只是讓時間暫時靜止， 
           這裡都有一個剛剛好的位置，等你停留。
          </p>

          <p
            className={`font-body text-sm mt-4 leading-7 ${
              dark ? "text-[#F5EFE6]/60" : "text-black/50"
            }`}
          >
            In the rhythm of the city,
            we’ve created a place to slow down.
            Whether to gather, to work,
            or simply to let time pause for a moment,
            there is always a place here, just for you.
          </p>
        </div>

        {/* Blocks */}
        <div className="grid md:grid-cols-2 gap-16">

          {[
            {
              zh: "辦公",
              en: "WORK",
              desc: "在安靜與流動之間，讓專注自然發生。",
            },
            {
              zh: "用餐",
              en: "DINE",
              desc: "從白晝到夜晚，風味隨時間展開。",
            },
            {
              zh: "相聚",
              en: "GATHER",
              desc: "在剛好的距離裡，讓關係更自在。",
            },
            {
              zh: "停留",
              en: "REST",
              desc: "在光影之間，時間變得柔軟，停留也不再需要理由。",
            },
          ].map((item) => (
            <div key={item.en} className="group">
              <h3 className="font-zh-title text-xl mb-2">
                {item.zh}
              </h3>

              <p
                className={`font-en text-xs tracking-[0.2em] mb-3 ${
                  dark ? "text-[#F5EFE6]/50" : "text-black/40"
                }`}
              >
                {item.en}
              </p>

              <p
                className={`font-zh text-sm leading-7 transition ${
                  dark
                    ? "text-[#F5EFE6]/70 group-hover:text-white"
                    : "text-black/70"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}