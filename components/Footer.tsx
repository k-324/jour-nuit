export default function Footer() {
  return (
    <footer className="bg-[#FFFBF2] text-black px-6 py-16 border-t border-black/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <img
            src="/logo.jpg"
            alt="JOUR & NUIT"
            className="h-14 mb-4"
          />

          <p className="text-sm text-black/70 leading-relaxed">
            從早晨到夜晚的溫暖餐飲空間
            <span className="block text-xs uppercase tracking-[0.12em] text-black/50 mt-1">
              A warm dining space from morning to night
            </span>
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="text-lg tracking-[0.3em] text-[#6F0000] mb-4 uppercase">
            導覽
            <span className="ml-2 text-[10px] tracking-[0.2em] text-black/50">
              NAVIGATE
            </span>
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#6F0000] transition-colors">
                首頁 <span className="text-black/50">Home</span>
              </a>
            </li>

            <li>
              <a href="/menu" className="hover:text-[#6F0000] transition-colors">
                菜單 <span className="text-black/50">Menu</span>
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-[#6F0000] transition-colors">
                關於 <span className="text-black/50">About</span>
              </a>
            </li>

            <li>
              <a href="/visit" className="hover:text-[#6F0000] transition-colors">
                晝夜之間 <span className="text-black/50">Visit us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg tracking-[0.3em] text-[#6F0000] mb-4 uppercase">
            聯絡我們
            <span className="ml-2 text-[10px] tracking-[0.2em] text-black/50">
              CONTACT
            </span>
          </h3>

          <ul className="space-y-3 text-sm leading-relaxed">

            {/* 時間 */}
            <li>
              每日 07:00 – 22:00
              <span className="block text-xs text-black/50">
                Open daily 07:00 – 22:00 
              </span>
            </li>

            {/* 地址（可點擊） */}
            <li>
              <a
                href="https://share.google/v1vQj7Mz4dDaXOnOX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#6F0000] transition-colors"
              >
                台北市大安區金華街187號1樓
                <span className="block text-xs text-black/50">
                  1F, No. 187, Jinhua St., Da’an Dist., Taipei City
                </span>
              </a>
            </li>

            {/* 電話 */}
            <li>
              <a
                href="tel:+886223418681"
                className="text-black hover:text-[#6F0000] transition-colors"
              >
                +886 2 2341 8681
              </a>
            </li>

            {/* IG */}
            <li>
              <a
                href="https://instagram.com/jouretnuittpe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#6F0000] hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17" cy="7" r="1.5"></circle>
                </svg>

                <span>@jouretnuittpe</span>
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 pt-6 border-t border-black/10 flex justify-between text-xs text-black/50">
        <p>
          © 2026 JOUR&NUIT
          <span className="ml-2">版權所有</span>
        </p>

        <p>
          台北，台灣
          <span className="ml-2">TAIPEI, TAIWAN</span>
        </p>
      </div>
    </footer>
  );
}