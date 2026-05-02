import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Surfaces } from "@/components/sections/Surfaces";
import { ProblemShift } from "@/components/sections/ProblemShift";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ApiPreview } from "@/components/sections/ApiPreview";
import { FAQ } from "@/components/sections/FAQ";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Reveal>
          <Logos />
        </Reveal>
        <Reveal>
          <Surfaces />
        </Reveal>
        <Reveal>
          <ProblemShift />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <ApiPreview />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <ClosingCTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
