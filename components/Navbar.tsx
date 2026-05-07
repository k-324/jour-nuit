"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { zh: "首頁", en: "HOME", href: "/" },
    { zh: "菜單", en: "MENU", href: "/menu" },
    { zh: "關於", en: "ABOUT", href: "/about" },
    { zh: "晝夜之間", en: "VISIT", href: "/visit" },
  ];

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full bg-[#FFFBF2]/95 backdrop-blur-md border-b border-black/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="/" className="shrink-0">
          <img src="/logo.jpg" alt="JOUR & NUIT" className="h-12 w-auto" />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-12 ml-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link flex items-baseline gap-2"
            >
              <span className="font-zh-title text-2xl">{link.zh}</span>
              <span className="font-en text-lg text-black/50 tracking-[0.2em]">
                {link.en}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
       <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          aria-label="Open menu"
        >
          <span
            className={`block h-[1.5px] w-6 bg-black transition duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-black transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-black transition duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#FFFBF2] border-t border-black/10 px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3"
              >
                <span className="font-zh-title text-2xl">{link.zh}</span>
                <span className="font-en text-sm text-black/50 tracking-[0.2em]">
                  {link.en}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}