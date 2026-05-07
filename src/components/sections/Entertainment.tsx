"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Entertainment() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    gsap.set(".text-card", { yPercent: 100 });
    gsap.set(".bg-image", { filter: "blur(0px)", opacity: 0.8 });

    tl.to(".text-1", { yPercent: 0, duration: 1, ease: "power2.inOut" }, 0)
      .to(".text-1", { yPercent: -100, duration: 1, ease: "power2.inOut" }, 1)

      .to(".text-2", { yPercent: 0, duration: 1, ease: "power2.inOut" }, 1.5)
      .to(".text-2", { yPercent: -100, duration: 1, ease: "power2.inOut" }, 2.5)

      .to(".text-3", { yPercent: 0, duration: 1, ease: "power2.inOut" }, 3)
      .to(".text-3", { yPercent: -100, duration: 1, ease: "power2.inOut" }, 4);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-black overflow-hidden flex flex-col justify-center items-center">

      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="/entertainment.png"
          alt="Massive Aquarium"
          className="bg-image w-full h-full object-cover transition-opacity duration-300"
        />
        {/* Subtle persistent overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full h-full overflow-hidden pointer-events-none">

        {/* Intro Card */}
        <div className="text-card text-1 absolute inset-0 flex items-center justify-center">
          <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-bold text-white tracking-tighter text-center leading-none drop-shadow-2xl">
            THIS IS A <br />
            <span className="text-gold-500">DESTINATION.</span>
          </h2>
        </div>

        {/* Unified Luxury Card 1 */}
        <div className="text-card text-2 absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-[#050505]/40 backdrop-blur-xl border border-white/5 p-12 md:p-20 rounded-none text-center max-w-4xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            <p className="text-gold-500 uppercase tracking-[0.4em] text-xs font-semibold mb-6">Marine Wonder</p>
            <h3 className="text-5xl md:text-7xl font-playfair mb-8 text-white drop-shadow-lg">10 Million Liters</h3>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">Of deep blue wonder, suspended right in the center of the world's most luxurious shopping destination.</p>
          </div>
        </div>

        {/* Unified Luxury Card 2 */}
        <div className="text-card text-3 absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-[#050505]/40 backdrop-blur-xl border border-white/5 p-12 md:p-20 rounded-none text-center max-w-4xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            <p className="text-gold-500 uppercase tracking-[0.4em] text-xs font-semibold mb-6">Engineering Awe</p>
            <h3 className="text-5xl md:text-7xl font-playfair mb-8 text-white drop-shadow-lg">Beyond Retail</h3>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">From an Olympic-sized ice rink to immersive VR parks, we engineer experiences that defy expectation.</p>
          </div>
        </div>

      </div>

    </section>
  );
}
