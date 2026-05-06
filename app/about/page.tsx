"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-[#FFFBF2] text-black">
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-en text-sm tracking-[0.3em] text-[#6F0000] mb-6">
              ABOUT JOUR&NUIT
            </p>

            <h1 className="leading-tight">
              <span className="block font-display text-4xl md:text-6xl italic">
                Between Day & Night
              </span>
            </h1>

            <p className="mt-10 font-zh text-lg leading-10 text-black/75">
              在城市的節奏之中，JOUR&NUIT 留下一個可以慢下來的空間。
              從早餐、午後工作，到夜晚聚會與深夜咖啡，
              我們希望每一段停留，都成為日常裡溫柔的一部分。
            </p>
            <p className="mt-6 font-body text-base leading-8 text-black/50">
            In the rhythm of the city,
            <span className="brand"> JOUR&NUIT </span>
            is a place to slow down.
            From breakfast and daytime work
            to late-night coffee and gatherings,
            we hope every visit feels warm,
            quiet, and memorable.
          </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="overflow-hidden rounded-[40px] border border-black/10"
          >
            <img
              src="/about-3.jpg"
              alt="JOUR&NUIT space"
              className="h-[520px] w-full object-cover scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 px-6 md:px-12 border-t border-black/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 overflow-hidden rounded-[36px] border border-black/10"
          >
            <img
              src="/about-1.jpg"
              alt="Dining at JOUR&NUIT"
              className="h-[480px] w-full object-cover scale-96"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <p className="font-en text-xs tracking-[0.3em] text-[#6F0000] mb-5">
              FOOD & EXPERIENCE
            </p>

            <h2 className="font-zh-title text-3xl mb-8">
              從白晝到夜晚的風味
            </h2>

            <p className="font-zh text-base leading-9 text-black/70">
              從早餐、輕食、義大利麵，到深夜咖啡與酒類，
              JOUR&NUIT 的菜單隨著時間展開。
              白天適合工作與相聚，夜晚則留給談話、微醺與安靜的時刻。
            </p>

            <p className="font-body text-sm leading-7 text-black/45 mt-5">
              From breakfast and light meals to late-night coffee and drinks,
              our menu follows the rhythm of the day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Space */}
      <section className="py-28 px-6 md:px-12 bg-[#2B1E1A] text-[#F5EFE6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-en text-xs tracking-[0.3em] text-[#F5EFE6]/50 mb-5">
              SPACE & LIFESTYLE
            </p>

            <h2 className="font-zh-title text-3xl mb-8">
              一個適合停留的地方
            </h2>

            <p className="font-zh text-base leading-9 text-[#F5EFE6]/75">
              我們相信，真正舒服的空間，不只是提供餐點，
              更能讓人自在地停留。你可以慢慢吃飯、慢慢聊天，
              或只是靜靜坐著，讓時間暫時慢下來。
            </p>
            <p className="font-body text-sm leading-8 text-[#F5EFE6]/55 mt-6">
              We believe a comfortable space
              is more than food alone.
              It is a place where time slows,
              conversations linger,
              and staying feels effortless.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="overflow-hidden rounded-[36px] border border-[#F5EFE6]/10"
          >
            <img
              src="/about-2.jpg"
              alt="JOUR&NUIT interior"
              className="h-[460px] w-full object-cover scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-zh-title text-3xl md:text-4xl leading-[1.8]">
            在城市時空之間，
            留下屬於您的位置。
          </p>

          <p className="font-display italic text-xl text-black/45 mt-8">
            A place to stay, between day and night.
          </p>
        </motion.div>
      </section>
    </main>
  );
}