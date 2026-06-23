import Link from "next/link";
import SectionLabel from "./SectionLabel";

export default function LocationPreview() {
  return (
    <section className="py-28 md:py-40 border-t border-black/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: info */}
          <div className="md:col-span-4">
            <SectionLabel className="mb-8">Find Us</SectionLabel>

            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs text-noir/30 tracking-wider mb-2">
                  Address
                </p>
                <p className="font-display text-2xl font-light leading-snug">
                  Da&apos;an District
                  <br />
                  Taipei, Taiwan
                </p>
                <p className="font-body text-sm text-noir/40 mt-2">
                  [Full address TBD]
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-noir/30 tracking-wider mb-2">
                  Hours
                </p>
                <p className="font-body text-sm text-noir/70">
                  Every day — 07:00 to 22:00
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-noir/30 tracking-wider mb-2">
                  MRT
                </p>
                <p className="font-body text-sm text-noir/70">
                  Da&apos;an Station, Exit 6<br />
                  3 min walk
                </p>
              </div>
            </div>

            <Link href="/visit" className="btn-ghost mt-10 inline-block">
              Full Directions
            </Link>
          </div>

          {/* Right: map placeholder */}
          <div className="md:col-span-8">
            <div className="map-placeholder h-72 md:h-full min-h-64 rounded-sm">
              <div className="text-center">
                <div
                  className="w-3 h-3 rounded-full bg-rouge mx-auto mb-3"
                  style={{ boxShadow: "0 0 0 8px rgba(111,0,0,0.15)" }}
                />
                <p className="font-mono text-xs text-noir/30 tracking-widest">
                  Map Placeholder
                </p>
                <p className="font-body text-xs text-noir/20 mt-1">
                  Da&apos;an District, Taipei
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
