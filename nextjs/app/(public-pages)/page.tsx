import { Metadata } from "next";
import { CallToAction } from "@/sections/call-to-action";
import { Contact } from "@/sections/contact";
import { Gallery } from "@/sections/gallery";
import { HeroSection } from "@/sections/hero-sections";
import { Stats } from "@/sections/stats";
import { Testimonials } from "@/sections/testimonials";
import { WhyChooseUs } from "@/sections/why-choose-us";

export const metadata: Metadata = {
  title: "Indus Enclave — Housing Project Karachi",
  description:
    "Indus Enclave — A premier housing project by Al-Ashraf Group of Companies on M-9 Motorway, Karachi. Offering residential plots, commercial plots, and luxury villas with transparent payment plans.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
    </main>
  );
}
