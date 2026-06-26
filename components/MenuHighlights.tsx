"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuHighlights() {
  const sections = [
  {
    titleZh: "早餐",
    titleEn: "Breakfast",
    time: "07:00 – 11:00",
    href: "/menu#breakfast",
    items: [
      { zh: "厚吐司套餐", en: "Toast Set", price: "NT$100", desc: "11:00 前點飲品即贈厚吐司套餐" },
      { zh: "Nutella 好酥", en: "Nutella Delight", price: "NT$50", desc: "香甜酥脆的熱壓吐司" },
      { zh: "花生 Nutella 好酥", en: "Peanut Butter & Nutella Delight", price: "NT$60", desc: "花生醬與 Nutella 的濃郁組合" },
      { zh: "火腿蛋沙拉", en: "Ham & Egg Salad", price: "NT$65", desc: "鹹香火腿搭配蛋沙拉" },
      { zh: "鮪魚蛋沙拉", en: "Tuna & Egg Salad", price: "NT$65", desc: "鮪魚與蛋沙拉的經典口味" },
      { zh: "夏威夷", en: "Hawaiian Ham & Pineapple", price: "NT$65", desc: "火腿與鳳梨的清爽風味" },
    ],
  },
  {
    titleZh: "全日餐點",
    titleEn: "All-Day Menu",
    time: "10:00 – 22:00（餐點供應至 20:00，飲品供應至 22:00）",
    href: "/menu#lunch",
    items: [
      { zh: "經典大安早餐盤", en: "Classic Daan Breakfast Plate", price: "NT$340", desc: "豐盛早午餐盤" },
      { zh: "法式嫩煎雞腿早午餐", en: "Pan-Seared Chicken Thigh Brunch", price: "NT$390", desc: "嫩煎雞腿搭配早午餐配菜" },
      { zh: "羅勒雞腿茄汁義大利麵", en: "Basil Chicken Thigh Tomato Pasta", price: "NT$350", desc: "香氣濃郁的羅勒茄汁風味" },
      { zh: "鮭魚青醬義大利麵", en: "Salmon Pesto Pasta", price: "NT$380", desc: "鮭魚搭配青醬義大利麵" },
      { zh: "味噌鮭魚飯", en: "Miso Salmon Rice Set", price: "NT$380", desc: "附配菜與湯品，依季節食材調整" },
      { zh: "照燒雞腿飯", en: "Teriyaki Chicken Thigh Rice Set", price: "NT$350", desc: "經典照燒風味定食" },
    ],
  },
];

  return (
    <section className="bg-[#FFFBF2] py-28 px-6 md:px-12 text-black">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="leading-tight">
            <span className="block font-zh-title text-3xl mb-3">
              精選菜單
            </span>
            <span className="font-display text-black/60">
              Menu Highlights
            </span>
          </h2>
        </div>

        {/* Sections */}
        <div className="space-y-20">

          {sections.map((section) => (
            <div key={section.titleEn}>

              {/* Title */}
              <Link href={section.href} className="group block text-center">
                <h3 className="flex justify-center items-baseline gap-3">
                  <span className="font-zh-title text-2xl group-hover:text-[#6F0000] transition">
                    {section.titleZh}
                  </span>
                  <span className="font-en text-sm text-black/50 tracking-[0.2em] group-hover:text-[#6F0000] transition">
                    {section.titleEn}
                  </span>
                </h3>

                <p className="mt-2 font-en text-xs text-[#6F0000] tracking-[0.2em]">
                  {section.time}
                </p>

                <div className="w-10 h-px bg-black/20 mx-auto my-6 group-hover:w-20 group-hover:bg-[#6F0000] transition" />
              </Link>

              {/* Items */}
              <div className="grid gap-4 md:grid-cols-2 mt-6">
                {section.items.map((item) => (
                  <div
                    key={item.zh}
                    className="group/item border border-black/10 px-5 py-4 hover:border-[#6F0000] hover:bg-white/40 transition"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="font-zh text-base">{item.zh}</p>
                        <p className="font-en text-[10px] text-black/40">{item.en}</p>
                      </div>
                      <p className="font-en text-xs text-[#6F0000]">
                        {item.price}
                      </p>
                    </div>

                    <p className="mt-2 max-h-0 overflow-hidden opacity-0 group-hover/item:max-h-20 group-hover/item:opacity-100 transition">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}