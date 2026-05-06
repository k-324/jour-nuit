import Link from "next/link";
import SectionLabel from "./SectionLabel";

export default function AboutPreview() {
  return (
    <section className="py-28 md:py-40 border-t border-black/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Label column */}
          <div className="md:col-span-3">
            <SectionLabel>About</SectionLabel>
          </div>

          {/* Content column */}
          <div className="md:col-span-7 md:col-start-4">
            <h2
              className="font-display font-light mb-8 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              A place that belongs to
              <span className="italic"> no single hour.</span>
            </h2>
            <div className="font-body text-base text-noir/60 leading-relaxed space-y-4 max-w-xl">
              <p>
                JOUR&NUIT was born from a simple belief: that a space should
                earn its place in your day — whether that&apos;s a quiet
                morning coffee, a working lunch, a late dinner with friends,
                or a nightcap long after midnight.
              </p>
              <p>
                We sit at the intersection of café, restaurant, and social
                club — warm enough for strangers, intimate enough for
                regulars.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-10 font-body text-xs tracking-widest uppercase text-rouge link-underline"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
