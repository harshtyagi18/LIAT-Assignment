import { Hero } from "@/components/sections/Hero";
import { WhyThisProperty } from "@/components/sections/WhyThisProperty";
import { RetailEcosystem } from "@/components/sections/RetailEcosystem";
import { LuxuryExperience } from "@/components/sections/LuxuryExperience";
import { DiningLifestyle } from "@/components/sections/DiningLifestyle";
import { Entertainment } from "@/components/sections/Entertainment";
import { Events } from "@/components/sections/Events";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full">
      <Hero />
      <WhyThisProperty />
      <RetailEcosystem />
      <LuxuryExperience />
      <Entertainment />
      <DiningLifestyle />
      <Events />
      <CTA />
    </main>
  );
}
