import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-16 px-4 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 lg:p-20">
          <div className="absolute inset-0">
            <Image src="/background.png" alt="" fill className="object-cover" />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(260.92deg, #FF7104 -12.19%, #000AC3 106.29%)",
              opacity: 0.85,
            }}
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <h2 className="mb-6 text-4xl font-bold font-clash text-white md:text-5xl lg:text-6xl text-balance">
                Ready to Take Your Business to the Next Level?
              </h2>

              <div className="relative inline-block">
                <p className="mb-8 text-base font-clash text-white/90 md:text-lg lg:text-xl max-w-3xl mx-auto text-pretty">
                  Partner with PUEPR to unlock smarter growth, streamline
                  operations, and achieve measurable results—no matter where
                  your business is based.
                </p>

                {/* Profile image positioned on the right */}
              </div>

              <button className="!bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-2 text-lg rounded-full transition-all">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
