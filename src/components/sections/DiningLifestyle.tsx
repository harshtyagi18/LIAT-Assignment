"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const panels = [
  {
    category: "The Gastronomic Peak",
    title: "Michelin",
    subtitle: "Excellence",
    description: "Curated concepts from the world's most decorated chefs, brought together in an unprecedented culinary ecosystem.",
    image: "/dining.png"
  },
  {
    category: "Atmospheric Dining",
    title: "Rooftop",
    subtitle: "Horizons",
    description: "Dine suspended above the city skyline. Panoramic views paired with world-class mixology and late-night ambiance.",
    image: "/dining.png"
  },
  {
    category: "Curated Tastes",
    title: "Global",
    subtitle: "Flavors",
    description: "An editorial selection of international concepts, redefining casual luxury and bespoke café culture.",
    image: "/dining.png"
  }
];

export function DiningLifestyle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".horizontal-panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + scrollRef.current?.offsetWidth
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-[#050505] overflow-hidden flex items-center">
      <div ref={scrollRef} className="flex h-full w-[300vw]">
        {panels.map((panel, i) => (
          <div key={i} className="horizontal-panel w-screen h-full flex flex-col md:flex-row relative">

            {/* Dark Graphic Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none md:w-2/3 lg:w-1/2" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none md:hidden" />

            {/* Left Content */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-32 relative z-20">
              <p className="text-gold-500 uppercase tracking-[0.4em] text-xs font-semibold mb-6">{panel.category}</p>
              <h2 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-2 leading-none">
                {panel.title}
              </h2>
              <h2 className="text-5xl md:text-7xl font-playfair italic text-gray-500 mb-8 leading-none">
                {panel.subtitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-md leading-relaxed">
                {panel.description}
              </p>
            </div>

            {/* Right Image */}
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={panel.image}
                alt={panel.title}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
