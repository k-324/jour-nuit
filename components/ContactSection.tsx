import SectionLabel from "./SectionLabel";

export default function ContactSection() {
  return (
    <section className="py-28 md:py-40 bg-noir text-cream border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Heading */}
          <div className="md:col-span-5">
            <SectionLabel className="text-cream/30 mb-6">Contact</SectionLabel>
            <h2
              className="font-display font-light text-cream leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Say hello.
              <br />
              <span className="italic">We&apos;re always in.</span>
            </h2>
          </div>

          {/* Contact details */}
          <div className="md:col-span-6 md:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs text-cream/25 tracking-wider mb-3">
                Phone
              </p>
              <a
                href="tel:+886200000000"
                className="font-display text-2xl text-cream font-light hover:text-rouge transition-colors duration-200"
              >
                +886 2 XXXX XXXX
              </a>
            </div>

            <div>
              <p className="font-mono text-xs text-cream/25 tracking-wider mb-3">
                Instagram
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl text-cream font-light hover:text-rouge transition-colors duration-200"
              >
                @journuit.taipei
              </a>
            </div>

            <div>
              <p className="font-mono text-xs text-cream/25 tracking-wider mb-3">
                Email
              </p>
              <a
                href="mailto:hello@journuit.com"
                className="font-display text-2xl text-cream font-light hover:text-rouge transition-colors duration-200"
              >
                hello@journuit.com
              </a>
            </div>

            <div>
              <p className="font-mono text-xs text-cream/25 tracking-wider mb-3">
                Address
              </p>
              <p className="font-display text-2xl text-cream font-light">
                Da&apos;an, Taipei
              </p>
            </div>
          </div>
        </div>

        {/* Large brand signature */}
        <div className="mt-20 md:mt-32 overflow-hidden">
          <p
            className="font-display font-light text-right leading-none"
            style={{
              fontSize: "clamp(4rem, 12vw, 11rem)",
              color: "rgba(255,251,242,0.04)",
              letterSpacing: "-0.02em",
            }}
          >
            JOUR&NUIT
          </p>
        </div>
      </div>
    </section>
  );
}
