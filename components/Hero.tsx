"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 600], [0, 80]);
  const textY = useTransform(scrollY, [0, 500], [0, -40]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0.45]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.img
        src="/hero.jpg"
        alt="JOUR & NUIT"
        style={{ y: imageY }}
        className="
          absolute inset-0 h-[112%] w-full object-cover hero-kenburns
          object-[45%_75%]
          md:object-[43%_70%]
          lg:object-[42%_68%]
          xl:object-[40%_65%]
        "
      />

      <div className="absolute inset-0 bg-black/25" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex min-h-screen items-center px-6 md:px-16"
      >
        <div className="max-w-2xl text-[#FFFBF2]">
        
          <h1 className="font-display mt-6 text-5xl font-medium leading-[1.08] tracking-tight md:text-7xl">
            Avec vous,
            <br />
            le jour et la nuit.
          </h1>

          <p className="font-zh mt-6 max-w-md text-base leading-8 text-[#FFFBF2]/85">
            悠然於晝夜之間，留一隅靜好。
          </p>

        </div>
      </motion.div>
    </section>
  );
}