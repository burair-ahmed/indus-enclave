import { AboutHero } from "@/sections/about/about-hero";
import { AboutMission } from "@/sections/about/about-mission";
import { AboutStats } from "@/sections/about/about-stats";
import { AboutValues } from "@/sections/about/about-values";
import { AboutTeam } from "@/sections/about/about-team";
import { AboutCta } from "@/sections/about/about-cta";

export const metadata = {
    title: "About Us - Indus Enclave",
    description:
        "Learn about Indus Enclave - our story, our values, and the team behind your dream home journey.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutMission />
            <AboutStats />
            <AboutValues />
            <AboutTeam />
            <AboutCta />
        </main>
    );
}