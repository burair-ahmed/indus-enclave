import { Metadata } from "next";
import { TermsHero } from "@/sections/terms/terms-hero";
import { TermsContent } from "@/sections/terms/terms-content";

export const metadata: Metadata = {
    title: "Terms of Service - Indus Enclave Housing Project",
    description:
        "Read the Terms of Service for Indus Enclave and Al-Ashraf Group of Companies. Understand your rights and obligations when booking residential plots, commercial plots, or villas.",
    keywords: [
        "Indus Enclave Terms of Service",
        "Al-Ashraf Group Terms",
        "Indus Enclave Booking Terms",
        "Property Booking Agreement Pakistan",
        "SBCA SDA Housing Terms",
        "M-9 Motorway Housing Legal",
        "Karachi Housing Project Terms"
    ],
    openGraph: {
        title: "Terms of Service - Indus Enclave",
        description:
            "Understand your legal agreement with Indus Enclave. Terms covering property bookings, payments, intellectual property, and dispute resolution.",
        images: ["/hero-bg.webp"]
    }
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <TermsHero />
            <TermsContent />
        </main>
    );
}
