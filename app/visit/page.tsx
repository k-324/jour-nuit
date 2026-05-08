import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Visit — JOUR&NUIT",
  description: "Find JOUR&NUIT in Da'an District, Taipei. Open daily 07:00 – 02:00.",
};

const hours = [
  { dayZh: "週一", dayEn: "Monday", time: "07:00 – 18:30" },
  { dayZh: "週二至週五", dayEn: "Tuesday – Friday", time: "07:00 – 02:00" },
];

const transport = [
  {
    modeZh: "捷運",
    modeEn: "MRT",
    detailsZh: ["東門站 3 號出口 (紅/橘線)", "步行約 5 分鐘"],
    detailsEn: ["Dongmen Station Exit 3 (Red/Orange Line)", "5-minute walk"],
  },
  {
    modeZh: "YouBike",
    modeEn: "YouBike",
    detailsZh: ["政大公企站", "距離 1 分鐘"],
    detailsEn: ["NCCU CPBAE station", "1-minute walk"],
  },
];

export default function VisitPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-black/8">
        <SectionLabel className="mb-8">
          <span className="font-zh-title text-xl md:text-2xl">
            晝夜之間
          </span>
          <span className="ml-2 font-en text-lg tracking-[0.2em] text-black/50">
            VISIT US
          </span>
        </SectionLabel>

        <h1
          className="leading-none"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)", letterSpacing: "-0.02em" }}
        >
          <span className="block font-display font-light">
            We&apos;re
            <br />
            <span className="italic">always open.</span>
          </span>
        </h1>

        <p className="mt-8 max-w-md leading-relaxed">
          <span className="block font-zh text-base text-noir/70">
            從早晨咖啡到夜晚微醺，歡迎您在白晝與夜晚之間，留下一段自在時光。
          </span>
          <span className="block font-body text-sm text-noir/40 mt-3">
            Come early for coffee. Stay late for cocktails. There&apos;s always a table for you.
          </span>
        </p>
      </div>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: address + hours */}
          <div className="lg:col-span-5 space-y-12">
            {/* Address */}
            <div>
              <SectionLabel className="mb-6">
               <span className="font-zh-title text-xl md:text-2xl">
                  地址
                </span>
                <span className="ml-2 font-en text-lg text-black/50">ADDRESS</span>
              </SectionLabel>

              <div className="space-y-2">
               
                <a
                  href="https://share.google/n6ZaKsXNQ9QPa5lTK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 group"
                >
                  <span className="block font-zh text-base text-noir/80 group-hover:text-rouge transition">
                    台北市大安區金華街187號1樓 (全家政大金華店旁)
                  </span>

                  <span className="block font-body text-sm text-noir/50 mt-1 group-hover:text-rouge transition">
                    1F, No. 187, Jinhua St, Da&apos;an District, Taipei City.
                  </span>
                </a>
              </div>
            </div>

            <div className="h-px bg-black/8" />

            {/* Hours */}
            <div>
              <SectionLabel className="mb-6">
                <span className="font-zh-title text-xl md:text-2xl">
                  營業時間
                </span>
                <span className="ml-2 font-en text-lg text-black/50">
                  OPENING HOURS
                </span>
              </SectionLabel>

              <div className="space-y-0 border-t border-black/8">
                {hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-4 border-b border-black/6"
                  >
                    <p className="text-sm">
                      <span className="font-zh text-black/70 mr-2">{h.dayZh}</span>
                      <span className="font-body text-black/40">{h.dayEn}</span>
                    </p>

                    <p className="font-mono text-sm text-black font-medium">
                      {h.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-black/8" />

            {/* Contact */}
            <div>
              <SectionLabel className="mb-6">
                <span className="font-zh text-xl md:text-2xl">
                  聯絡我們
                </span>
                <span className="ml-2 font-en text-lg text-black/50">
                  CONTACT US
                </span>
              </SectionLabel>

              <div className="space-y-4">
                <div>
                  <p className="text-base text-black/40 tracking-wider mb-1">
                    <span className="font-zh-title">
                      電話
                    </span>
                    <span className="font-en ml-2 text-[12px] text-black/50">
                      PHONE
                    </span>
                  </p>
                  <a
                    href="tel:+886223418681"
                    className="font-body text-base text-noir hover:text-rouge transition-colors duration-200"
                  >
                    +886 2 2341 8681
                  </a>
                </div>

                <div>
                  <p className="text-base text-black/40 tracking-wider mb-1">
                    <span className="font-zh-title">
                      電郵地址
                    </span>
                    <span className="font-en ml-2 text-[12px] text-black/50">
                      EMAIL
                    </span>
                  </p>
                  <a
                    href="mailto:jouretnuittpe@gmail.com"
                    className="font-body text-base text-noir hover:text-rouge transition-colors duration-200"
                  >
                    jouretnuittpe@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-base text-black/40 tracking-wider mb-1">
                    <span className="font-zh-title">
                      社群媒體
                    </span>
                    <span className="font-en ml-2 text-[12px] text-black/50">
                      SOCIAL MEDIA
                    </span>
                  </p>
                  <a
                    href="https://www.instagram.com/jouretnuittpe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-base text-noir hover:text-rouge transition-colors duration-200"
                  >
                    @jouretnuittpe
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map + transport */}
          <div className="lg:col-span-7 space-y-10">
          
            {/* Transportation */}
            <div>
              <SectionLabel className="mb-6">
                <span className="font-zh-title text-xl md:text-2xl">
                  交通方式
                </span>
                <span className="ml-2 font-en text-lg text-black/50">
                  GETTING HERE
                </span>
              </SectionLabel>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-black/8">
                {transport.map((t, i) => (
                  <div key={i} className="p-6 border-r border-b border-black/8">
                    <p className="section-label mb-4">
                      <span className="font-zh-title text-lg">{t.modeZh}</span>
                      <span className="font-en ml-2 text-lg text-black/50">
                        {t.modeEn}
                      </span>
                    </p>

                    {t.detailsZh.map((d, j) => (
                      <p
                        key={j}
                        className="font-zh text-base tracking-[0.05em] text-noir/80 leading-relaxed mb-3"
                      >
                        {d}
                        <span className="block font-body text-sm tracking-normal text-noir/40 mt-1">
                          {t.detailsEn[j]}
                        </span>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reserve CTA */}
      <div className="bg-noir text-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                className="leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                <span className="block font-zh-title text-cream text-[0.7em] mb-3">
                  團體訂位
                </span>
                <span className="font-display font-light text-cream">
                  Coming in for a
                  <span className="italic"> group?</span>
                </span>
              </h2>

              <p className="mt-4 max-w-sm">
                <span className="block font-zh text-lg text-cream/60">
                  六人以上聚會，建議提前來電或來訊預約。
                </span>
                <span className="block font-body text-lg text-cream/40 mt-2">
                  For parties of 6 or more, we recommend calling ahead to reserve your space.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+886223418681" className="btn-rouge whitespace-nowrap">
                <span className="font-zh mr-2">
                  來電預約
                </span>
                <span className="font-en text-xs text-white/70">
                  Call to Reserve
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* Private Events 包場 */}
      <section
      id="private-events"
      className="bg-[#FFFBF2] py-20 md:py-28 border-t border-black/10"
    >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* 左 */}
            <div>
              <h2 className="leading-tight">
                <span className="block font-zh-title text-3xl tracking-[0.08em] mb-3">
                  包場活動
                </span>
                <span className="font-display font-light text-noir">
                  Private <span className="italic">Events</span>
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-relaxed">
                <span className="block font-zh text-base tracking-[0.05em] text-noir/70">
                  適合企業包場、生日慶祝、私人聚會與專案活動。
                  JOUR&NUIT 提供半場與全場包場方案，費用皆包含餐飲消費折抵。
                </span>
                <span className="block font-body text-sm text-noir/40 mt-3">
                  Suitable for company gatherings, birthday celebrations, private dining, and special events.
                </span>
              </p>

              <div className="mt-8 grid gap-4">

                {/* 半場 */}
                <div className="border border-black/10 p-5">
                  <p className="font-zh-title text-xl tracking-[0.08em]">
                    半場包場
                  </p>
                  <p className="font-en text-sm text-black/50 mt-1">
                    Semi-private Event
                  </p>

                  <p className="mt-4 font-zh text-sm tracking-[0.05em] text-black/70">
                    NT$20,000 / 3 小時，適合 15–17 人
                  </p>

                  <p className="font-body text-xs text-black/40 mt-1">
                    Includes food and beverage credit
                  </p>
                </div>

                {/* 全場 */}
                <div className="border border-black/10 p-5">
                  <p className="font-zh-title text-xl tracking-[0.08em]">
                    全場包場
                  </p>
                  <p className="font-en text-sm text-black/50 mt-1">
                    Full Venue Buyout
                  </p>

                  <p className="mt-4 font-zh text-sm tracking-[0.05em] text-black/70">
                    NT$50,000 / 3 小時
                  </p>

                  <p className="font-body text-xs text-black/40 mt-1">
                    Includes food and beverage credit
                  </p>
                </div>

              </div>

              <div className="mt-8">
                <a
                  href="https://lin.ee/NyOAsNg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rouge"
                >
                  <span className="font-zh mr-2">
                    預約/洽詢
                  </span>
                  <span className="font-en text-[10px] text-white/70 tracking-[0.1em]">
                    Enquire/Reserve
                  </span>
                </a>
              </div>
            </div>

            {/* 右圖 */}
            <div>
              <img
                src="/private-event.jpg"
                alt="Private event at JOUR & NUIT"
                className="w-full rounded-sm border border-black/10"
              />
            </div>

        </div>
      </div>
    </section>
    </div>

    
    
  );
}