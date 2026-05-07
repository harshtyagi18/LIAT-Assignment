"use client";
import { FadeIn } from "@/components/motion/FadeIn";

export function CTA() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#050505] relative overflow-hidden border-t border-gray-900">
      
      <div className="text-center z-10 px-4 flex flex-col items-center">
        <FadeIn>
          <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-playfair mb-8 leading-none tracking-tighter">
            Become part <br /> of the legacy.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button className="px-10 py-5 bg-white text-black font-semibold tracking-[0.2em] uppercase text-xs hover:bg-gray-200 hover:scale-[1.02] transition-all duration-500 rounded-full cursor-pointer">
              Lease With Us
            </button>
            <button className="px-10 py-5 border border-gray-700 text-white font-semibold tracking-[0.2em] uppercase text-xs hover:border-gold-500 hover:text-gold-500 hover:bg-white/5 transition-all duration-500 rounded-full cursor-pointer">
              Explore Sponsorships
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
