import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Results } from "@/components/sections/results";
import { CaseStudies } from "@/components/sections/case-studies";
import { Process } from "@/components/sections/process";
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
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
