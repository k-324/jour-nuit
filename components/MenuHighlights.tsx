"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuHighlights() {
  const sections = [
    {
      titleZh: "早餐",
      titleEn: "Breakfast",
      time: "07:00 – 10:30",
      href: "/menu#breakfast",
      items: [
        { zh: "雞肉漢堡", en: "Chicken Burger", price: "NT$95", desc: "雞肉、生菜、蛋、番茄與美乃滋" },
        { zh: "豬肉漢堡", en: "Pork Burger", price: "NT$95", desc: "經典早餐漢堡組合" },
        { zh: "雞肉三明治", en: "Chicken Sandwich", price: "NT$80", desc: "白吐司、雞肉與蛋" },
        { zh: "蜂蜜法式吐司", en: "French Toast", price: "NT$50", desc: "香甜早餐選擇" },
        { zh: "玉米蛋餅", en: "Corn Egg Pancake", price: "NT$50", desc: "台式經典蛋餅" },
        { zh: "早餐套餐", en: "Set Combo", price: "NT$150", desc: "含飲品完整組合" },
      ],
    },
    {
      titleZh: "午餐",
      titleEn: "Lunch",
      time: "10:30 – 18:00",
      href: "/menu#lunch",
      items: [
        { zh: "肉醬義大利麵", en: "Bolognese", price: "NT$135", desc: "經典紅醬風味" },
        { zh: "青醬蘑菇義大利麵", en: "Pesto Mushroom", price: "NT$130", desc: "香氣濃郁青醬" },
        { zh: "鮪魚火腿可頌", en: "Tuna Croissant", price: "NT$85", desc: "酥脆可頌搭配餡料" },
        { zh: "蘑菇可頌", en: "Mushroom Croissant", price: "NT$75", desc: "清爽輕食選擇" },
        { zh: "起司蛋餅", en: "Cheese Pancake", price: "NT$50", desc: "濃郁起司" },
        { zh: "黑芝麻牛奶", en: "Sesame Milk", price: "NT$55", desc: "冰熱皆可" },
      ],
    },
    {
      titleZh: "晚餐",
      titleEn: "Dinner",
      time: "18:00 – 22:00",
      href: "/menu#dinner",
      items: [
        { zh: "厚片吐司", en: "Toast", price: "NT$70", desc: "多種抹醬選擇" },
        { zh: "墨西哥玉米脆片", en: "Nachos", price: "NT$80", desc: "相聚分享首選" },
        { zh: "綜合堅果", en: "Mixed Nuts", price: "NT$100", desc: "佐酒小食" },
        { zh: "當日蛋糕", en: "Daily Cake", price: "NT$120", desc: "依供應情形調整" },
        { zh: "水餃", en: "Dumplings", price: "NT$150", desc: "暖心主食" },
        { zh: "威士忌可樂", en: "Whisky Coke", price: "NT$320", desc: "經典調酒" },
      ],
    },
    {
      titleZh: "深夜咖啡",
      titleEn: "Late Night",
      time: "22:00 – 02:00",
      href: "/menu#late-night",
      items: [
        { zh: "衣索比亞手沖", en: "Ethiopia", price: "NT$180", desc: "冰/熱" },
        { zh: "哥倫比亞手沖", en: "Colombia", price: "NT$180", desc: "風味平衡" },
        { zh: "柚子康普茶", en: "Yuzu Kombucha", price: "NT$160", desc: "清爽氣泡" },
        { zh: "桂花烏龍", en: "Oolong Tea", price: "NT$180", desc: "熱飲" },
        { zh: "巧克力牛奶", en: "Chocolate Milk", price: "NT$170", desc: "濃郁甜香" },
        { zh: "黑糖牛奶", en: "Brown Sugar Milk", price: "NT$170", desc: "經典風味" },
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