"use client";
import { FadeIn } from "@/components/motion/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function LuxuryExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="py-40 bg-[#050505] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-5/12 order-2 md:order-1 relative h-[60vh] md:h-[80vh]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <motion.img 
                style={{ y }}
                src="/luxury.png" 
                alt="Luxury Retail Corridor" 
                className="absolute inset-0 w-full h-[130%] object-cover opacity-90"
              />
            </div>
            <div className="absolute inset-0 border border-gray-800 m-6 mix-blend-overlay pointer-events-none rounded-xl" />
          </div>

          <div className="w-full md:w-7/12 order-1 md:order-2 flex flex-col justify-center pl-0 md:pl-12">
            <FadeIn>
              <p className="uppercase tracking-[0.4em] text-gold-500 text-xs font-semibold mb-6">Fashion Avenue</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                A sanctuary <br />
                of <span className="text-gray-500 italic font-playfair font-normal">refinement.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg mb-12 leading-relaxed">
                Designed for the world's most discerning clientele. The architecture breathes elegance, offering a minimalist canvas that allows premium brands to command attention.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <button className="relative overflow-hidden border border-gray-700 rounded-full px-10 py-5 uppercase tracking-[0.2em] text-xs transition-colors duration-500 hover:border-gold-500/50 hover:bg-white/5 cursor-pointer bg-black/50 backdrop-blur-md">
                <span className="relative z-10 text-gray-300 hover:text-white transition-colors">Explore Avenue</span>
              </button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
