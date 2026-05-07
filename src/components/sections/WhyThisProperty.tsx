"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function WhyThisProperty() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2500", // Reduced scroll distance for faster pacing
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    // Sequence: Stat 1 enters -> holds -> exits -> wait -> Stat 2 enters...
    tl.to(".stat-1", { opacity: 1, y: 0, scale: 1, duration: 1 }, 0)
      .to(".stat-1", { opacity: 0, y: -50, scale: 1.05, duration: 1 }, "+=0.8")

      .to(".stat-2", { opacity: 1, y: 0, scale: 1, duration: 1 }, "+=0.2")
      .to(".stat-2", { opacity: 0, y: -50, scale: 1.05, duration: 1 }, "+=0.8")

      .to(".stat-3", { opacity: 1, y: 0, scale: 1, duration: 1 }, "+=0.2");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen relative bg-black flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />

      <div className="stat-1 opacity-0 translate-y-[50px] scale-95 absolute flex flex-col items-center text-center px-4 w-full max-w-4xl">
        <span className="text-[12vw] md:text-[10vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter">100M+</span>
        <span className="text-lg md:text-xl text-gold-500 uppercase tracking-widest mt-4 font-semibold">Annual Visitors</span>
        <p className="text-gray-400 mt-4 font-light text-base md:text-lg max-w-xl">More foot traffic than the Eiffel Tower, Niagara Falls, and Disney World combined.</p>
      </div>

      <div className="stat-2 opacity-0 translate-y-[50px] scale-95 absolute flex flex-col items-center text-center px-4 w-full max-w-4xl">
        <span className="text-[12vw] md:text-[10vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter">1,200+</span>
        <span className="text-lg md:text-xl text-gold-500 uppercase tracking-widest mt-4 font-semibold">Global Brands</span>
        <p className="text-gray-400 mt-4 font-light text-base md:text-lg max-w-xl">The ultimate stage for category leaders and visionary retail concepts.</p>
      </div>

      <div className="stat-3 opacity-0 translate-y-[50px] scale-95 absolute flex flex-col items-center text-center px-4 w-full max-w-4xl">
        <span className="text-[12vw] md:text-[10vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter">12M</span>
        <span className="text-lg md:text-xl text-gold-500 uppercase tracking-widest mt-4 font-semibold">Sq Ft Space</span>
        <p className="text-gray-400 mt-4 font-light text-base md:text-lg max-w-xl">A sprawling metropolis of commerce, dining, and unparalleled entertainment.</p>
      </div>

    </section>
  );
}
