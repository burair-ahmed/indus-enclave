import { Metadata } from "next";
import { FaqHero } from "@/sections/faq/faq-hero";
import { FaqAccordionSection } from "@/sections/faq/faq-accordion-section";
import { FaqCta } from "@/sections/faq/faq-cta";

export const metadata: Metadata = {
    title: "Frequently Asked Questions (FAQ) - Indus Enclave",
    description:
        "Find answers about Indus Enclave's SBCA & SDA approvals, M-9 Motorway Nooriabad Exit 8 location, amenities, and affordable plots under 1 Million PKR.",
    keywords: [
        "Indus Enclave FAQ",
        "SBCA approved housing M9",
        "SDA approved Indus Enclave",
        "Indus Enclave location M9 Motorway",
        "Plots under 1 million PKR",
        "Sunflower Block Payment Plan",
        "Nooriabad housing schemes"
    ],
    openGraph: {
        title: "Frequently Asked Questions - Indus Enclave",
        description:
            "Approved by SBCA & SDA, located at M-9 Motorway Exit 8, offering plots under 1 Million PKR with full amenities.",
        images: ["/hero-bg.webp"]
    }
};

export default function FaqPage() {
    return (
        <main className="min-h-screen bg-white">
            <FaqHero />
            <FaqAccordionSection />
            <FaqCta />
        </main>
    );
}
