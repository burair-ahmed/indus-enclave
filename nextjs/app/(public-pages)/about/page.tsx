import { AboutHero } from "@/sections/about/about-hero";
import { AboutMission } from "@/sections/about/about-mission";
import { AboutStats } from "@/sections/about/about-stats";
import { AboutValues } from "@/sections/about/about-values";
import { AboutLeadership } from "@/sections/about/about-leadership";
import { AboutTeam } from "@/sections/about/about-team";
import { AboutCta } from "@/sections/about/about-cta";

export const metadata = {
    title: "About Us — Indus Enclave | Al-Ashraf Group of Companies",
    description:
        "Learn about Indus Enclave — a master-planned housing project by Al-Ashraf Group of Companies on M-9 Motorway, Karachi. Approved by SBCA & SDA, offering 80 & 120 sq. yard plots with transparent 5-year installment plans.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutMission />
            <AboutStats />
            <AboutValues />
            <AboutLeadership />
            <AboutTeam />
            <AboutCta />
        </main>
    );
}