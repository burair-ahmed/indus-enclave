import { Metadata } from "next";
import { PrivacyHero } from "@/sections/privacy/privacy-hero";
import { PrivacyContent } from "@/sections/privacy/privacy-content";

export const metadata: Metadata = {
    title: "Privacy Policy - Indus Enclave Housing Project",
    description:
        "Learn how Indus Enclave and Al-Ashraf Group of Companies protect your personal data, property booking documents, CNIC/NICOP records, and transaction privacy.",
    keywords: [
        "Indus Enclave Privacy Policy",
        "Al-Ashraf Group Privacy",
        "Indus Enclave Booking Security",
        "SBCA SDA Approved Housing",
        "Property Booking Confidentiality",
        "M-9 Motorway Housing Scheme"
    ],
    openGraph: {
        title: "Privacy Policy - Indus Enclave",
        description:
            "Transparent guidelines on how we collect, safeguard, and respect your personal and property booking records.",
        images: ["/hero-bg.webp"]
    }
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <PrivacyHero />
            <PrivacyContent />
        </main>
    );
}
