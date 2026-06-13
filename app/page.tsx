import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Results } from "@/components/sections/results";
import { CaseStudies } from "@/components/sections/case-studies";
import { Achievements } from "@/components/sections/achievements";
import { Process } from "@/components/sections/process";
import { AddOns } from "@/components/sections/add-ons";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Results />
      <CaseStudies />
      <Achievements />
      <Process />
      <AddOns />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
