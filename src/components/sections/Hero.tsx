"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  return (
    <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0 origin-bottom">
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/40 to-[#050505]/90 z-10" />
        {/* Controlled darkening behind typography to separate text from bright background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]/90 z-10" />
        <img 
          src="/hero_new.png" 
          alt="Dubai Mall Exterior" 
          className="w-full h-full object-cover brightness-90 contrast-125"
        />
      </motion.div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl translate-y-[-5vh]">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#E8DCC4]/70 uppercase text-xs md:text-sm font-medium mb-8 tracking-[0.5em]"
        >
          Dubai Mall Exterior
        </motion.p>
        
        <TextReveal 
          text="DUBAI MALL" 
          delay={0.2} 
          className="text-6xl md:text-8xl lg:text-[10rem] font-playfair font-medium tracking-[0.05em] text-[#FDFDFD] leading-[0.9] drop-shadow-2xl justify-center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-lg md:text-2xl text-[#C4C0B8] max-w-2xl font-light text-center leading-relaxed drop-shadow-md"
        >
          Where luxury, scale, and cinematic entertainment converge. The future of global retail.
        </motion.p>
      </div>
    </section>
  );
}
