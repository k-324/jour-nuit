import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFBF2]/90 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-8 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.jpg" alt="JOUR & NUIT" className="h-14 w-auto" />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-12 ml-auto">

          <Link href="/" className="nav-link flex items-baseline gap-2">
            <span className="font-zh-title text-lg">
              首頁
            </span>
            <span className="font-en text-base tracking-[0.2em] text-black/50">
              HOME
            </span>
          </Link>

          <Link href="/menu" className="nav-link flex items-baseline gap-2">
            <span className="font-zh-title text-lg">
              菜單
            </span>
            <span className="font-en text-base tracking-[0.2em] text-black/50">
              MENU
            </span>
          </Link>

          <Link href="/about" className="nav-link flex items-baseline gap-2">
            <span className="font-zh-title text-lg">
              關於
            </span>
            <span className="font-en text-base tracking-[0.2em] text-black/50">
              ABOUT
            </span>
          </Link>

          <Link href="/visit" className="nav-link flex items-baseline gap-2">
            <span className="font-zh-title text-lg">
              晝夜之間
            </span>
            <span className="font-en text-base tracking-[0.2em] text-black/50">
              VISIT US
            </span>
          </Link>

        </nav>
      </div>
    </header>
  );
}