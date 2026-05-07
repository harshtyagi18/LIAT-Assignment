"use client";
import { FadeIn } from "@/components/motion/FadeIn";

export function Events() {
  return (
    <section className="py-32 bg-[#0a0a0a] border-y border-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 text-center">
        <FadeIn>
          <p className="text-gold-500 uppercase tracking-[0.4em] font-semibold mb-6 text-xs">The Global Stage</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
            If you launch here,<br className="hidden md:block" />
            <span className="text-gray-400 font-playfair italic">the world notices.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            A platform for global brands to create unforgettable cultural moments. Fashion events, product launches, conventions, and celebrity appearances.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
          {["Brand Activations", "Global Conventions", "Red Carpet Events"].map((title, i) => (
            <div key={i} className="bg-black p-12 hover:bg-[#080808] transition-colors duration-500 cursor-pointer group flex flex-col items-center justify-center min-h-[250px] relative overflow-hidden">
              <h3 className="text-2xl font-playfair mb-6 group-hover:text-gold-500 transition-colors relative z-10">{title}</h3>
              <div className="px-6 py-2 rounded-full border border-gray-800 group-hover:border-gold-500/50 transition-all duration-500 bg-transparent group-hover:bg-white/5">
                <p className="text-gray-500 font-light text-[10px] tracking-[0.2em] uppercase group-hover:text-gold-500 transition-colors">Explore</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
