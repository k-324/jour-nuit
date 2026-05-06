"use client";

import { useState } from "react";

const menuSections = [
  {
    titleZh: "早餐",
    titleEn: "Breakfast",
    images: [
      "/menu/bfmenu1.jpg",
      "/menu/bfmenu2.jpg",
      "/menu/bfmenu3.jpg",
      "/menu/bfmenu4.jpg",
    ],
  },
  {
    titleZh: "午餐",
    titleEn: "Lunch",
    images: [
      "/menu/lunchmenu1.jpg",
      "/menu/lunchmenu2.jpg",
      "/menu/lunchmenu3.jpg",
      "/menu/lunchmenu4.jpg",
      "/menu/lunchmenu5.jpg",
      "/menu/lunchdrinkmenu.jpg",
      "/menu/lunchmenu6.jpg",
    ],
  },
  {
    titleZh: "晚餐",
    titleEn: "Dinner",

    images: [
      "/menu/dinnermenu1.jpg",
      "/menu/dinnermenu2.jpg",
      "/menu/dinnermenu3.jpg",
      "/menu/dinnermenu4.jpg",
      "/menu/dinnermenu5.jpg",
    ],
  },




  {
    titleZh: "深夜咖啡",
    titleEn: "Late Night",
    images: [
      "/menu/nightmenu1.jpg",
      "/menu/nightmenu2.jpg",
      "/menu/nightmenu3.jpg",
      "/menu/nightmenu4.jpg",
    ],
  },
];

export default function MenuPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20 bg-[#FFFBF2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-16 text-center">
          <h1 className="leading-tight">
            <span className="block font-zh-title text-3xl mb-3">菜單</span>
            <span className="font-display text-black/60">Menu</span>
          </h1>
        </div>

        <div className="space-y-24">
          {menuSections.map((section) => (
            <div
              key={section.titleEn}
              id={section.titleEn.toLowerCase().replace(" ", "-")}
              className="scroll-mt-32"
            >
              <div className="text-center mb-10">
                <h2 className="flex justify-center items-baseline gap-3">
                  <span className="font-zh-title text-2xl">{section.titleZh}</span>
                  <span className="font-en text-sm text-black/50 tracking-[0.2em]">
                    {section.titleEn}
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setSelectedImage(img)}
                    className="group overflow-hidden rounded-[30px] border border-black/10 cursor-zoom-in"
                  >
                    <img
                      src={img}
                      alt={`${section.titleEn} menu ${i + 1}`}
                      className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 py-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-4xl text-white hover:text-[#FFFBF2]"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Full menu"
            className="max-h-[90vh] max-w-[95vw] rounded-xl bg-white object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}