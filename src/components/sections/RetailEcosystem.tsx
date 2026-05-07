"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const brands = [
  { name: "CHANEL", font: "font-sans font-bold tracking-widest" },
  { name: "DIOR", font: "font-serif tracking-widest" },
  { name: "PRADA", font: "font-serif font-bold tracking-[0.3em]" },
  { name: "GUCCI", font: "font-serif tracking-widest" },
  { name: "HERMÈS", font: "font-serif font-bold tracking-widest" },
  { name: "LOUIS VUITTON", font: "font-serif tracking-[0.1em]" },
];

export function RetailEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${brands.length * 800}`, // Reduced scroll duration for faster pacing
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    tl.to(".progress-bar", { scaleY: 1, ease: "none", duration: brands.length }, 0);
    gsap.set(".brand-logo", { yPercent: -50, y: 400, opacity: 0.05, scale: 0.4, filter: "blur(12px)" });

    brands.forEach((_, i) => {
      const startTime = i;
      tl.to(`.brand-logo-${i}`, {
        y: 0, opacity: 1, scale: 1.2, filter: "blur(0px)",
        duration: 1, ease: "power2.inOut"
      }, startTime - 0.5)
        .to(`.brand-logo-${i}`, {
          y: -400, opacity: 0.05, scale: 0.4, filter: "blur(12px)",
          duration: 1, ease: "power2.inOut"
        }, startTime + 0.5);
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-[#050505] overflow-hidden flex flex-col md:flex-row">

      {/* LEFT SIDE: Narrative */}
      <div className="w-full md:w-1/3 h-[40vh] md:h-full flex flex-col justify-center px-8 md:px-12 lg:px-24 border-b md:border-b-0 md:border-r border-gray-900 relative z-20 bg-[#050505]">
        <p className="text-gold-500 uppercase tracking-[0.4em] text-xs font-semibold mb-6">Global Brands</p>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-none">
          The Retail <br className="hidden md:block" />
          <span className="italic text-gray-500">Ecosystem</span>
        </h2>
        <p className="text-gray-400 font-light text-sm md:text-lg max-w-sm mb-12">
          The ultimate stage for category leaders and visionary retail concepts.
        </p>

        {/* Progress Indicator */}
        <div className="hidden md:block h-32 w-[1px] bg-gray-800 relative">
          <div className="progress-bar absolute top-0 left-0 w-full h-full bg-gold-500 origin-top scale-y-0" />
        </div>
      </div>

      {/* RIGHT SIDE: Immersive Vertical Brand Scroller */}
      <div className="w-full md:w-2/3 h-[60vh] md:h-full relative flex items-center justify-center pointer-events-none perspective-[1000px]">
        {brands.map((brand, i) => (
          <div key={brand.name} className={`brand-logo brand-logo-${i} absolute top-1/2 left-0 w-full flex justify-center items-center origin-center px-4`}>
            {/* Using responsive viewport width text sizing to absolutely guarantee no overflow */}
            <h3 className={`text-[11vw] md:text-[7vw] lg:text-[5vw] text-white whitespace-nowrap drop-shadow-2xl ${brand.font}`}>
              {brand.name}
            </h3>
          </div>
        ))}

        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-10" />
      </div>

    </section>
  );
}
